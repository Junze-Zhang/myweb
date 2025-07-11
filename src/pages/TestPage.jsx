import '../components/themes/modern/assets/center.css';
import Loader from '../components/themes/modern/animation';

// Original loader animation CSS (problematic one we removed)
const originalLoaderCSS = `
.test-loader {
    position: relative;
    width: 10em;
    height: 10em;
}

.test-loader .track, .test-loader .inner-track {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #e8e8e8;
    box-shadow: inset -0.1em -0.1em 0.2em #d1d1d1, inset 0.1em 0.1em 0.2em #ffffff;
}

.test-loader .inner-track {
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    border: 2em solid #f0f0f0;
}

.test-loader .orb {
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    top: 50%;
    left: 50%;
    background-color: #c0cfda;
    border-radius: 50%;
    animation: test-spin 1.5s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
    background: radial-gradient(circle at 30% 30%, #ffffff, #ccc);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(255, 255, 255, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

@keyframes test-spin {
    0% {
        transform: translate(-50%, -50%) rotate(90deg) translate(3em) rotate(-90deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(450deg) translate(3em) rotate(-450deg);
    }
}
`;

export const TestPage = () => {
  return (
    <>
      <style>{originalLoaderCSS}</style>
      <div style={{
        minHeight: '100vh',
        background: '#e8e8e8',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ color: '#333', marginBottom: '3rem', textAlign: 'center' }}>
          Animation Test Page
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '4rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Center Animation */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            background: '#f0f0f0',
            borderRadius: '20px',
            boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
          }}>
            <h2 style={{ color: '#333', marginBottom: '2rem' }}>Center Animation</h2>
            <p style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
              From center.css (Uiverse.io by mrhyddenn)
            </p>
            
            <div className="loader-box">
              <div className="loading-wrapper">
                <div className="loader">
                  <div className="loader-inner"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Original Loader Animation */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            background: '#f0f0f0',
            borderRadius: '20px',
            boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
          }}>
            <h2 style={{ color: '#333', marginBottom: '2rem' }}>Original Loader</h2>
            <p style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
              From animation.css (Uiverse.io by forgingdestiny)
            </p>
            
            <div className="test-loader">
              <div className="track"></div>
              <div className="inner-track"></div>
              <div className="orb"></div>
            </div>
          </div>

          {/* New Styled-Components Animation */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            background: '#f0f0f0',
            borderRadius: '20px',
            boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
          }}>
            <h2 style={{ color: '#333', marginBottom: '2rem' }}>Styled-Components</h2>
            <p style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
              React component with styled-components
            </p>
            
            <Loader />
          </div>
        </div>

        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <a 
            href="/" 
            style={{
              color: '#8B5CF6',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
};