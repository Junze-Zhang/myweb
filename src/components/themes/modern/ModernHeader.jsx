import { Header } from '../../layout/Header';
import { navigationText } from '../../../text/navigation';
import './assets/circular-button.css';

// Import Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap';
fontLink.rel = 'stylesheet';
if (!document.querySelector('link[href*="Nunito+Sans"]')) {
  document.head.appendChild(fontLink);
}

// Circular Button Component for Social Links
const CircularSocialButton = ({ icon, href, label }) => {
  const getIconSVG = (iconName) => {
    switch(iconName) {
      case 'github':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'email':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.006c.208 0 .414.042.61.121L12 10.486l9.748-6.544c.196-.079.402-.121.61-.121h.006c.904 0 1.636.732 1.636 1.636z"/>
          </svg>
        );
      default:
        return <span>🔗</span>;
    }
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      style={{ textDecoration: 'none' }}
    >
      <div className="toggle" style={{ height: '32px', width: '32px' }}>
        <div className="button" style={{
          height: '32px',
          width: '32px'
        }}></div>
        <div className="label" style={{
          color: '#4a5568'
        }}>
          {getIconSVG(icon)}
        </div>
      </div>
    </a>
  );
};

// Circular Theme Toggle Button
const CircularDiceButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      aria-label="Random Theme"
      style={{ 
        background: 'none', 
        border: 'none', 
        padding: 0,
        cursor: 'pointer'
      }}
    >
      <div className="toggle" style={{ height: '32px', width: '32px' }}>
        <div className="button" style={{
          height: '32px',
          width: '32px'
        }}></div>
        <div className="label" style={{
          color: '#4a5568'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10.02 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4.02,23.1 3.63,22.71L1.29,20.37C0.9,19.98 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 13.98,6.9 14.37,7.29Z"/>
          </svg>
        </div>
      </div>
    </button>
  );
};

export const ModernHeader = ({ onThemeToggle }) => {
  const logoComponent = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src="/logo.svg" 
        alt="Junze Zhang Portfolio"
        style={{
          height: 'auto',
          maxWidth: '200px',
          width: 'auto',
          objectFit: 'contain'
        }}
        onError={(e) => {
          // Fallback to text if logo.svg doesn't exist
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline';
        }}
      />
      <span 
        style={{
          display: 'none',
          fontSize: '1.75rem',
          fontWeight: '800',
          color: '#2d3748',
          fontFamily: '"Nunito Sans", sans-serif',
          letterSpacing: '-0.025em'
        }}
      >
        {navigationText.brandNames.modern}
      </span>
    </div>
  );

  return (
    <div style={{
      width: '100%',
      padding: '0.75rem 2rem',
      position: 'sticky',
      top: '1rem',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      fontFamily: '"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '0.75rem 2rem',
        borderRadius: '50px',
        background: 'linear-gradient(135deg, rgba(232, 234, 241, 0.9) 0%, rgba(235, 236, 240, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 255, 255, 0.8)',
        boxShadow: `
          8px 7px 21px rgba(0, 0, 0, 0.15),
          inset -6px -7px 11px rgba(255, 255, 255, 0.84)
        `
      }}>
        <Header
          brandName={logoComponent}
          navigationLinks={navigationText.links}
          socialLinks={navigationText.social}
          onThemeToggle={onThemeToggle}
          navigationStyles={{
            fontFamily: '"Nunito Sans", sans-serif',
            color: '#4a5568',
            fontWeight: '500'
          }}
          socialButtonComponent={CircularSocialButton}
          diceButtonComponent={() => null}
        />
      </div>
    </div>
  );
};