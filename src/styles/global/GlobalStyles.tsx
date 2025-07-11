import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;600;700&display=swap');

  /* Neumorphism Base Styles */
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: #4B5563;
    background: linear-gradient(135deg, #f0f2f5 0%, #e8eaf0 50%, #dde1e7 100%);
    min-height: 100vh;
    transition: all 0.2s ease;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    color: #2D3748;
    margin-bottom: 0.5rem;
    letter-spacing: -0.025em;
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1rem; }

  p {
    margin-bottom: 1rem;
    color: #4B5563;
  }

  /* Links */
  a {
    color: #8B5CF6;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: #7C3AED;
      text-decoration: underline;
    }

    &:focus {
      outline: none;
    }
  }

  /* Buttons */
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
    }
  }

  /* Root Layout */
  #root {
    width: 100%;
    min-height: 100vh;
  }

  /* App Layout */
  .app {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #f0f2f5 0%, #e8eaf0 50%, #dde1e7 100%);
    font-family: 'Inter', "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .main {
    flex: 1;
    width: 100%;
  }

  /* Main content box with neumorphism */
  .main-content-box {
    background: #E5E7EB;
    border-radius: 24px;
    padding: 3rem;
    margin: 0 auto;
    max-width: 1200px;
    box-shadow: 
      12px 12px 24px rgba(0, 0, 0, 0.1),
      -12px -12px 24px rgba(255, 255, 255, 0.8);
  }

  /* Skip Link Accessibility */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0.5rem;
    z-index: 1001;
    padding: 0.5rem;
    background-color: #8B5CF6;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:focus {
      top: 0.5rem;
    }
  }

  /* Screen Reader Only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Smooth Scrolling */
  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;