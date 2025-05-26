import React, { useEffect } from 'react';

const VideoChat = () => {
  useEffect(() => {
    const domain = 'meet.jit.si';
    const options = {
      roomName: 'LetThereBeLightSupportRoom',
      width: '100%',
      height: 600,
      parentNode: document.getElementById('jitsi-container'),
    };
    new window.JitsiMeetExternalAPI(domain, options);
  }, []);

  return (
    <div>
      <h2>Live Video Chat</h2>
      <div id="jitsi-container" />
    </div>
  );
};

export default VideoChat;
