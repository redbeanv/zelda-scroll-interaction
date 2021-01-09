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
  const [sceneInfos, setSceneInfos] = useState();
  const [isSet, setIsSet] = useState(false);

  // TODO layout dataset 필요
  let yOffset;
  let currentScene = 0; // 현재 활성화된 scene

  // init scene
  useEffect(() => {
    if (!isSet) {
      const sections = document.getElementsByTagName('section');

      sceneInfoList.map((sceneInfo, i) => {

        // set scene type & objs
        const section = sections[i];
        sceneInfo.sceneType = section.dataset.sceneType;
        sceneInfo.objs.container = section;
        // TODO: canvas 추가

        // set scene image element
        let imageElems = [];
        for (let i = 0; i < sceneInfo.imageLength; i++) {
          let imgElem = document.createElement('img');
          imgElem.src = `${VIDEO_PATH}/${sceneInfo.sceneName}/${sceneInfo.imagesNames[i]}`;
          imageElems.push(imgElem);
        }
        sceneInfo.objs.imageElems = imageElems;

        // set scene scrollHeight
        if (sceneInfo.sceneType === 'sticky') {
          sceneInfo.scrollHeight = HEIGHT_NUM * window.innerHeight;
        } else if (sceneInfo.sceneType === 'normal') {
          sceneInfo.scrollHeight = sceneInfo.objs.container.offsetHeight;
        }
        sceneInfo.objs.container.style.height = `${sceneInfo.scrollHeight}px`;
      });

      setSceneInfos(sceneInfoList);
      setIsSet(true);
    }
  }, [isSet]);

  useEffect(() => {
  //   // sceneInfos[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
  //
  //   yOffset = window.pageYOffset;
  //   let totalScrollHeight = 0;
  //   totalScrollHeight += sceneInfo.scrollHeight;
  //   if (currentScene === 0 && totalScrollHeight >= yOffset) {
  //     currentScene = i;
  //   }
  //   // document.body.setAttribute('id', `show-scene-${currentScene}`);
  //   //
  //   // const heightRatio = window.innerHeight / 1080;
  //   // sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
  //   // sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
  //
  //   window.addEventListener('scroll', () => {
  //     yOffset = window.pageYOffset;
  //     console.log(yOffset)
  //     // scrollLoop();
  //     // checkMenu();
  //
  //     // if (!rafState) {
  //     //   rafId = requestAnimationFrame(loop);
  //     //   rafState = true;
  //     // }
  //   });
  //
    console.log(sceneInfos)
  }, [sceneInfos]);

  return (
    <AppLayout>
      <section className={styles.section1} data-scene-type='sticky'>
        <h2 className={styles.title}>The Legend of &nbsp;Zelda<br/>Breath of the Wild</h2>
        <img src="/images/video/001_intro/zelda 001.jpg" alt=""/>
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