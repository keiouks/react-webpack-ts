import React, { useEffect } from "react";
// import { Boo } from "./Boo";
import { FullScreenPresent } from './fullScreen';
export const Hello = () => {
  const name = 'kkoo';
  const [showFullIframe, setFullIframe] = React.useState<boolean>(false);
  function changeName(name: string) {
    return '00' + name + '00';
  }
  function handleClick(e: any) {
    e.preventDefault();
    setFullIframe(!showFullIframe);
  }

  function doFullscreenChange() {
    if (!document.fullscreenElement) {
      setFullIframe(false);
    }
  }

  useEffect(() => {
    document.addEventListener("fullscreenchange", doFullscreenChange);
  }, [])

  return <div>
    <h1>test from {changeName(name)} test</h1>
    <div><button onClick={handleClick}>click</button></div>
    {/* <Boo name="Bob" count={4}></Boo>
    <Boo name="Bob" count={100}></Boo>
    <Boo name="Bob" count={214}></Boo> */}
    { showFullIframe && <FullScreenPresent></FullScreenPresent> }
  </div>
};
