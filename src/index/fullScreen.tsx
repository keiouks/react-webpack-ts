import * as React from 'react';
import './fullScreen.less';

export const FullScreenPresent = () => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  React.useEffect(() => {
    iframeRef.current.requestFullscreen().then(() => {
      console.log('iframe fullscreen success');
    }).catch(() => {
      console.log('iframe fullscreen fail');
    });
  }, []);
  return (<div className="full-window-overlay">
    <iframe 
      ref={iframeRef}
      className="punch-present-iframe"
      allowFullScreen={true}
      style={{visibility: 'visible'}}
      src='/fullscreen.html'
      
    ></iframe>
  </div>);
};