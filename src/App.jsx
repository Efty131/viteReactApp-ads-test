import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.onclckmn.com/static/onclicka.js";
    script.async = true;
    script.setAttribute('data-admpid', '217679');
    const adContainer = document.getElementById('ad-container');
    if (adContainer) {
      adContainer.appendChild(script);
    }
    return () => {
      if (adContainer) {
        adContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Video Player Section */}
      <div className="video-container">
        <video controls controlsList="nodownload" width="600">
          <source src="/tom.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Ad Container */}
      <div id="ad-container"></div>
    </>
  );
}

export default App;