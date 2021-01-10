import React, {useState, useEffect} from 'react';
import AppLayout from '../components/appLayout';
import Gallery from '../components/gallery';
import styles from '../public/css/pages/index.module.css';
import path from 'path';
import fs from 'fs';

// TODO: constants 정의 필요
const PUBLIC = 'public';
const VIDEO_PATH = '/images/video';
const HEIGHT_NUM = 5;

const Main = ({sceneInfoList}) => {
  const [sceneInfos, setSceneInfos] = useState([]);
  const [layoutData, setLayoutData] = useState({
    yOffset: 0,           // window.pageYOffset
    prevScrollHeight: 0,  // yOffset보다 이전에 위치한 섹션 높이 합
    currentScene: 0,      // 현재 활성화된 scene
    enterNewScene: false, // 새로운 scene이 시작되는 순간 true
    acc: 0.1,
    delayedYOffset: 0,
    rafId: null,
    rafState: null,
  });
  const [isSet, setIsSet] = useState(false);

  // init
  useEffect(() => {
    if (!isSet) {
      const sections = document.getElementsByTagName('section');

      sceneInfoList.map((sceneInfo, i) => {
        // set scene type & objs
        const section = sections[i];
        sceneInfo.sceneType = section.dataset.sceneType;
        sceneInfo.objs.container = section;
        sceneInfo.objs.canvas = document.getElementsByTagName('canvas')[i];
        sceneInfo.objs.context = document.getElementsByTagName('canvas')[i] !== undefined
          ? document.getElementsByTagName('canvas')[i].getContext('2d')
          : null;

        // set scene image element
        let imageElems = [];
        for (let i = 0; i < sceneInfo.imageLength; i++) {
          let imgElem = document.createElement('img');
          imgElem.src = `${VIDEO_PATH}/${sceneInfo.sceneName}/${sceneInfo.imagesNames[i]}`;
          imageElems.push(imgElem);
        }
        sceneInfo.objs.imageElems = imageElems;

        // set scene scrollHeight
        switch (sceneInfo.sceneType) {
          case "sticky":
            sceneInfo.scrollHeight = HEIGHT_NUM * window.innerHeight;
            break;
          case "normal":
            sceneInfo.scrollHeight = sceneInfo.objs.container.offsetHeight;
            break;
          default:
            sceneInfo.scrollHeight = sceneInfo.objs.container.offsetHeight;
            break;
        }
        sceneInfo.objs.container.style.height = `${sceneInfo.scrollHeight}px`;
      });

      // set layout
      let totalScrollHeight = 0;
      let currentSceneIndex = 0;
      for (let i = 0; i < sceneInfoList.length; i++) {
        totalScrollHeight += sceneInfoList[i].scrollHeight;

        totalScrollHeight >= layoutData.yOffset
          ? currentSceneIndex = i
          : null
      }

      document.body.setAttribute('id', `show-scene-${currentSceneIndex}`);

      const heightRatio = window.innerHeight / 1080;
      sceneInfoList[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
      // sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;

      sceneInfoList[0].objs.context.drawImage(sceneInfoList[0].objs.imageElems[0], 0, 0);

      // data setting
      setSceneInfos(sceneInfoList);
      setLayoutData(prev => {
        return {
          ...prev,
          yOffset: window.pageYOffset,
          currentScene: currentSceneIndex
        }
      });

      setIsSet(true);
    }
  }, [isSet]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setLayoutData(prev => {
        return {
          ...prev,
          yOffset: window.pageYOffset
        }
      })
    });
    console.log(sceneInfos);
    console.log(layoutData);
  }, [sceneInfos]);

  return (
    <AppLayout>
      <section className={styles.section1} data-scene-type='sticky'>
        <h2 className={styles.title}>The Legend of &nbsp;Zelda<br/>Breath of the Wild</h2>
        <div className={styles.sticky}>
          <canvas id="vidio-canvas-0" width="1920" height="1080" className={styles.canvas}></canvas>
        </div>
      </section>
      <section className={styles.section2} data-scene-type='normal'>
        <p className={styles.desc}>
          <strong className={styles.point}>Lorem</strong> ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Sed
          pellentesque eros magna, <br/>ac ultrices nulla accumsan in.
        </p>
        <Gallery/>
      </section>
      <section className={styles.section3} data-scene-type='normal'>
        <h2 className={styles.title}>Calamity Ganon</h2>
        <img src="/images/video/001_intro/zelda 001.jpg" alt=""/>
      </section>
      <section className={styles.section3} data-scene-type='normal'>
        <h2 className={styles.title}>Color Change</h2>
      </section>
      <section className={styles.section3} data-scene-type='normal'>
        <h2 className={styles.title}>Ending</h2>
        <img src="/images/video/001_intro/zelda 001.jpg" alt=""/>
      </section>
    </AppLayout>
  )
};

export async function getStaticProps() {
  // process.cwd()는 nextjs 에서 제공하는 __dirname과 같은 루트값
  // fs객체는 ssr을 통해 접근이 가능해 getStaticProps로 파일 정보 수집을 먼저 함
  const sceneInfoList = [];
  const videosDirectory = fs.readdirSync(path.join(process.cwd(), PUBLIC, VIDEO_PATH));
  videosDirectory.map(v => {
    const imageNames = fs.readdirSync(path.join(process.cwd(), PUBLIC, VIDEO_PATH, v));

    sceneInfoList.push({
      sceneName: v,
      sceneType: '',
      imageLength: imageNames.length,
      imagesNames: imageNames,
      scrollHeight: 0,
      objs: {},
      values: {}
    })
  });

  return {
    props: {
      sceneInfoList
    }
  }
}

export default Main;