import React, { useEffect } from 'react';
import BlogPost from './blogPost';
import NativeBanner from './nativeBanner';
import Banner300 from './banner300x250';

function App() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = '//pl24100074.highratecpm.com/9e/fc/bf/9efcbfb4d352aab8d10b6c44a802b500.js';
    script.type = 'text/javascript';

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <BlogPost />
      <NativeBanner />
      <Banner300 />
    </>
  );
}

export default App;