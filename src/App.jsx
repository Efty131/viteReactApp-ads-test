import React from 'react';
import BlogPost from './blogPost';
import Banner720 from './banner720';
import NativeBanner from './nativeBanner';

function App() {
  return (
    <>
    <Banner720 />
     <h1 style={{textAlign: 'center'}}>App.jsx</h1>
      <BlogPost />
      <NativeBanner />
    </>
  );
}

export default App;