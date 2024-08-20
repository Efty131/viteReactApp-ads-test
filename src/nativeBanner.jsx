import React, { useEffect } from 'react';

const NativeBanner = () => {
  useEffect(() => {
    // Create the script element for the native banner ad
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl24099918.highratecpm.com/d3c8996efea361b31704642e35e4f89a/invoke.js';
    
    // Append the script to the div with the ID where the ad will be rendered
    const container = document.getElementById('container-d3c8996efea361b31704642e35e4f89a');
    container.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      container.removeChild(script);
    };
  }, []);

  return (
    <div>
        <p style={{textAlign: 'center'}}>Native Banner below:</p>
      {/* This div will hold the native banner ad */}
      <div id="container-d3c8996efea361b31704642e35e4f89a"></div>
    </div>
  );
};

export default NativeBanner;