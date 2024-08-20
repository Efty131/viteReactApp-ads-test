import React from 'react';
import BlogPost from './blogPost';
import NativeBanner from './nativeBanner';
import Banner300 from './banner300x250';

function App() {
  return (
    <>
    <Banner300 />
      <BlogPost />
      <NativeBanner />
    </>
  );
}

export default App;