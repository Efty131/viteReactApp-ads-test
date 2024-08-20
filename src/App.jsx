import React from 'react';
import BlogPost from './blogPost';
import Banner720 from './banner720';
import NativeBanner from './nativeBanner';
import SocialBar from './socialBar';
import AdsterraAd from './adsterraAd';

function App() {
  return (
    <>
    <Banner720 />
     <h1 style={{textAlign: 'center'}}>App.jsx</h1>
     <p style={{textAlign: 'center'}}>Ad 320x50 below:</p>
          <AdsterraAd />
      <BlogPost />
      <NativeBanner />
      <p style={{textAlign: 'center'}}>Social bar:</p>
      <SocialBar />
    </>
  );
}

export default App;