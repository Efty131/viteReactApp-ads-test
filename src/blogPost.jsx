import React from 'react'


const blogPost = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>How to Integrate Video Ads in Your React App</h1>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel malesuada velit, sed cursus nisi. Nulla facilisi. Integer non orci quis leo sollicitudin consectetur. Praesent eget risus vitae arcu vehicula aliquam et quis dolor.</p>
          
          <p>Sed dapibus nunc a magna sodales, quis interdum ligula fermentum. Nulla facilisi. In nec felis ac libero ornare tristique. Duis sit amet eros justo. Nam nec arcu id lorem mollis fermentum ut sed risus.</p>
          
          {/* Video with proper margin and padding */}
          <div style={{ textAlign: 'center', margin: '40px 0', padding: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <video controls style={{ maxWidth: '50%', borderRadius: '8px' }} poster='/tom.webp'>
              <source src="/tom.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
    
          <p>Nam nec arcu id lorem mollis fermentum ut sed risus. Sed dapibus nunc a magna sodales, quis interdum ligula fermentum. Nulla facilisi. In nec felis ac libero ornare tristique. Duis sit amet eros justo.</p>
          
          <p>Praesent eget risus vitae arcu vehicula aliquam et quis dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel malesuada velit, sed cursus nisi. Nulla facilisi. Integer non orci quis leo sollicitudin consectetur.</p>
    
    
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel malesuada velit, sed cursus nisi. Nulla facilisi. Integer non orci quis leo sollicitudin consectetur. Praesent eget risus vitae arcu vehicula aliquam et quis dolor.</p>
          
          <p>Sed dapibus nunc a magna sodales, quis interdum ligula fermentum. Nulla facilisi. In nec felis ac libero ornare tristique. Duis sit amet eros justo. Nam nec arcu id lorem mollis fermentum ut sed risus.</p>
        </div>
      );
    }

export default blogPost;