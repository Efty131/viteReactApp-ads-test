import React, { useEffect } from 'react';

function AdsterraAd() {
  useEffect(() => {
    const atOptions = {
      key: '0cf547d63fabb699e929e03a0af53030',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {},
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.topcreativeformat.com/0cf547d63fabb699e929e03a0af53030/invoke.js';

    document.getElementById('ad-container').appendChild(script);
  }, []);

  return (
    <div id="ad-container" style={{ textAlign: 'center', margin: '20px 0' }}>
      {/* This is where the Adsterra ad will be displayed */}
    </div>
  );
}

export default AdsterraAd;
