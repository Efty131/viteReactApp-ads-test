import React, { useEffect } from 'react';

const Banner300 = () => {
  useEffect(() => {
    // Create the script that defines the ad options
    const scriptParams = document.createElement('script');
    scriptParams.type = 'text/javascript';
    scriptParams.innerHTML = `
      atOptions = {
        'key' : '58226a6886d5648bcbdb1b2f3239e29a',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    // Create the script that loads the ad
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.topcreativeformat.com/58226a6886d5648bcbdb1b2f3239e29a/invoke.js';

    // Append the scripts to the body
    document.body.appendChild(scriptParams);
    document.body.appendChild(script);

    // Clean up the scripts when the component is unmounted
    return () => {
      document.body.removeChild(scriptParams);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* This div will hold the 300x250 banner ad */}
      <p style={{textAlign: 'center'}}>Banner350x250</p>
      <div id="banner300-container"></div>
    </div>
  );
};

export default Banner300;
