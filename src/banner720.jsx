import React, { useEffect } from 'react';

const banner720 = () => {
  useEffect(() => {
    // Create the script for the Adsterra ad
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.topcreativeformat.com/f70e559681a6df07bcbc66944242084e/invoke.js';
    
    // Create the script that contains the ad options
    const scriptParams = document.createElement('script');
    scriptParams.type = 'text/javascript';
    scriptParams.innerHTML = `
      atOptions = {
        'key' : 'f70e559681a6df07bcbc66944242084e',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    
    // Append the scripts to the DOM
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
      {/* The ad will be rendered here */}
      <div id="ad-container"></div>
    </div>
  );
};

export default banner720;