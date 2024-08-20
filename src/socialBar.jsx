import React, { useEffect } from 'react';

const SocialBar = () => {
  useEffect(() => {
    // Create the script element for the Social Bar ad
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl24100074.highratecpm.com/9e/fc/bf/9efcbfb4d352aab8d10b6c44a802b500.js';
    
    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI needed, just the script
};

export default SocialBar;
