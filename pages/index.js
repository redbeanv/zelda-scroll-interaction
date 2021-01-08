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

  // setCanvasImage
  useEffect(() => {
    if(!isSet) {
      sceneInfoList.map((sceneInfo, i) => {

        // set image element
        let imageElems = [];
        for (let i = 0; i < sceneInfo.imageLength; i++) {
          let imgElem = document.createElement('img');
          imgElem.src = `${VIDEO_PATH}/${sceneInfo.sceneName}/${sceneInfo.imagesNames[i]}`;
          imageElems.push(imgElem);
        }
        sceneInfoList[i].objs.imageElems = imageElems;

        // set scrollHeight
        // if (sceneInfo[i].type === 'sticky') {
        sceneInfo.scrollHeight = HEIGHT_NUM * window.innerHeight;
        // } else if (sceneInfo[i].type === 'normal') {
        //   sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
        // }
        // sceneInfo.objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;

      });

      setSceneInfos(sceneInfoList);
      setIsSet(true);
    }
  }, [isSet]);

  // setLayout
  useEffect(() => {
    console.log(sceneInfos)
    // yOffset = window.pageYOffset;
    // let totalScrollHeight = 0;
    // for (let i = 0; i < sceneInfo.length; i++) {
    //   totalScrollHeight += sceneInfo[i].scrollHeight;
    //   if (totalScrollHeight >= yOffset) {
    //     currentScene = i;
    //     break;
    //   }
    // }
    // document.body.setAttribute('id', `show-scene-${currentScene}`);
    //
    // const heightRatio = window.innerHeight / 1080;
    // sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
    // sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
  }, [sceneInfos]);

  return (
    <AppLayout>
      <section className={styles.section1}>
        <h2 className={styles.title}>The Legend of &nbsp;Zelda<br />Breath of the Wild</h2>
        <img src="/images/video/001_intro/zelda 001.jpg" alt="" />
      </section>
      <section className={styles.section2}>
        <p className={styles.desc}>
          <strong className={styles.point}>Lorem</strong> ipsum dolor sit amet, <br />consectetur adipiscing elit. <br />Sed pellentesque eros magna, <br />ac ultrices nulla accumsan in.
        </p>
        <Gallery />
      </section>
      <section className={styles.section3}>
        <h2 className={styles.title}>Calamity Ganon</h2>
        <img src="/images/video/001_intro/zelda 001.jpg" alt="" />
      </section>
      <section className={styles.section3}>
        <h2 className={styles.title}>Color Change</h2>
      </section>
      <section className={styles.section3}>
        <h2 className={styles.title}>Ending</h2>
        <img src="/images/video/001_intro/zelda 001.jpg" alt="" />
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