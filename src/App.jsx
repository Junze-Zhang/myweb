import { useState, useEffect } from 'react';
import { GlobalStyles } from './styles/global/GlobalStyles';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Footer } from './sections/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { TestPage } from './pages/TestPage';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simple routing based on pathname
  const currentPath = window.location.pathname;

  useEffect(() => {
    // Skip loading screen for test page, about page, experience page, skills page, projects page, and contact page
    if (currentPath === '/test' || currentPath === '/about' || currentPath === '/experience' || currentPath === '/skills' || currentPath === '/projects' || currentPath === '/contact') {
      setIsLoading(false);
      return;
    }

    // Show loading screen for 2 seconds on main page
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPath]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Show test page
  if (currentPath === '/test') {
    return (
      <>
        <GlobalStyles />
        <TestPage />
      </>
    );
  }

  // Show about page
  if (currentPath === '/about') {
    return (
      <>
        <GlobalStyles />
        <div className="app">
          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main id="main" className="main" role="main">
            <About />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }

  // Show experience page
  if (currentPath === '/experience') {
    return (
      <>
        <GlobalStyles />
        <div className="app">
          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main id="main" className="main" role="main">
            <Experience />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }

  // Show skills page
  if (currentPath === '/skills') {
    return (
      <>
        <GlobalStyles />
        <div className="app">
          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main id="main" className="main" role="main">
            <Skills />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }

  // Show projects page
  if (currentPath === '/projects') {
    return (
      <>
        <GlobalStyles />
        <div className="app">
          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main id="main" className="main" role="main">
            <Projects />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }

  // Show contact page
  if (currentPath === '/contact') {
    return (
      <>
        <GlobalStyles />
        <div className="app">
          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main id="main" className="main" role="main">
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <div className="app">

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main id="main" className="main" role="main">
          <Hero />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;