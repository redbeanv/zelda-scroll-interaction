import React, { useLayoutEffect, useRef } from 'react';
import styles from '../public/css/pages/test.module.css';

export default function Canvas() {
  const canvasRef = useRef();
  const wrapRef = useRef();
  
  const imgArr = [];
  let yOffset = 0;

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setImg();

    function calc(val, offset) {
      let rv;
      const height = wrap.scrollHeight - window.innerHeight;
      const ratio = offset / height;
      rv = ratio * (val[1] - val[0]) + val[0];
      return rv;
    }

    wrap.style.height = `${window.innerHeight * 5}px`;

    let tempYOffset = window.pageYOffset;
		let tempScrollCount = 0;
		if (window.pageYOffset > 0) {
			let siId = setInterval(() => {
				window.scrollTo(0, tempYOffset);
				tempYOffset += 5;
				tempScrollCount++;
				if(tempScrollCount > 20) {
					clearInterval(siId);
				}
			}, 20);
		} else {
      console.log('test');
      console.log(imgArr[0]);
      context.drawImage(imgArr[0], 0, 0, window.innerWidth, window.innerHeight)
    }

    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      const imgVal = [0, 356];
      const num = Math.round(calc(imgVal, yOffset));
      context.drawImage(imgArr[num], 0, 0, window.innerWidth, window.innerHeight);
    });
  });

  function setImg() {
    let img;
    for (let i = 1; i <= 357; i++) {
      img = document.createElement('img');
      img.src = `/images/video/001_intro/zelda ${ i < 10 ? '00' + i : i < 100 ? '0' + i : i}.jpg`;
      imgArr.push(img);
    }
  }

  return (
    <div className='canvasWrap' ref={wrapRef}>
      <canvas className={styles.canvas} ref={canvasRef}>teest</canvas>
    </div>
  );
}