import React, { useEffect } from "react";
import './animate.less';

export const AnimateUse = () => {
  const divRef = React.useRef<HTMLDivElement>(null);
  function handleClick(e: any) {
    e.preventDefault();
    const keyFrames = [
      {
        transform: 'roate(90deg)',
        offset: 0
      },
      {
        transform: 'rotate(360deg)'
      }
    ];
    const animateOptions = {
      duration: 2000,
      iterations: 2,
    };
    divRef.current.animate(keyFrames, animateOptions);
  }

  return <div>
    <h1>do some animate test</h1>
    <div><button onClick={handleClick}>click</button></div>
    <div className="move" ref={divRef} >xxx</div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <g>
          <g id="svgText" transform="matrix(1 0 0 1 0 0) translate(0 0) translate(96434 84313) matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 0) translate(-96434 -84313) matrix(1 0 0 1 0 0)">
            <g>
              <g direction="ltr">
                <text style='font-family:Arial;font-size:24px;fill:#595959;white-space:pre;'></text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
};
