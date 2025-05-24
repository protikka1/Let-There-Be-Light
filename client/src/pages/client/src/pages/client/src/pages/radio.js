import React from 'react';

const Radio = () => (
  <div>
    <h2>Let There Be Light Radio</h2>
    <audio controls>
      <source src="https://your-stream-url.com/live" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <p>Live Programs | Q&A with Hosts</p>
  </div>
);

export default Radio;
