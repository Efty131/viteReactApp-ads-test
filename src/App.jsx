import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Dynamically insert the ad script when the component mounts
    const script = document.createElement('script');
    script.src = "https://js.onclckmn.com/static/onclicka.js";
    script.async = true;
    script.setAttribute('data-admpid', '217679');
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <p>Testing ads...</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Video Player Section */}
      <div className="video-container">
        <video controls controlsList="nodownload" width="600">
          <source src="/src/videos/tom.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* The advertisement script will be injected dynamically */}
    </>
  );
}

export default App;
