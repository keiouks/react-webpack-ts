import React, { useEffect } from "react";
import './animate.less';

export const AnimateUse = () => {
  const divRef = React.useRef<HTMLDivElement>(null);
  function clickDivMove(e: any) {
    e.preventDefault();
    const keyFrames = [
      {
        transform: 'rotate(0deg)',
        offset: 0
      },
      {
        transform: 'rotate(360deg)'
      }
    ];
    const animateOptions = {
      duration: 5000,
      iterations: 1,
    };
    divRef.current.animate(keyFrames, animateOptions);
  }
  function clickSvgMove(e: any) {
    const keyFrames = [
      {
        transform: 'translateY(0) translateX(0)'
      },
      {
        transform: 'translateY(100px) translateX(100px)'
      },
    ];

    const animateOptions = {
      duration: 1000,
      iterations: 1,
    };
    const svgText = document.getElementById('svgText');
    const animation = svgText.animate(keyFrames, animateOptions);
    animation.onfinish = () => {
      svgText.setAttribute('transform', 'translate(100 100)');
    };
  }

  return <div>
    <h1>do some animate test</h1>
    <div><button onClick={clickDivMove}>div move</button></div>
    <div style={{height: "200px"}}>
      <div className="move" ref={divRef} >xxx</div>
    </div>
    <div><button onClick={clickSvgMove}>svg move</button></div>
    <div>
      <svg height="200" width="200">
        <g id="svgText" transform="translate(20 30)">
          <text x="0" y="15" fill="red">I love SVG!</text>
        </g>
      </svg>
    </div>
  </div>
};
