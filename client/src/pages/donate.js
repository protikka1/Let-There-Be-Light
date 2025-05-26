import React from 'react';

const Donate = () => (
  <div>
    <h2>Support Our Mission</h2>
    <p>Your donation helps us serve vulnerable communities.</p>
    <button onClick={() => window.location.href = 'https://donate.stripe.com/test123'}>
      Donate Now
    </button>
  </div>
);

export default Donate;
