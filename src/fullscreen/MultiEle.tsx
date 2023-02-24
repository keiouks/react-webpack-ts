import React, { useEffect } from "react";
import './show.less';

interface IProps {
  rootEle: HTMLDivElement;
}

export const MultiEle = (props: IProps) => {
  useEffect(() => {
    console.log('show root size', props.rootEle.offsetWidth, props.rootEle.offsetHeight);
  }, []);
  return <div className="show-multi">
    uuuu
  </div>
};
