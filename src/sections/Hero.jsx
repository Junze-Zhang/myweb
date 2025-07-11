import { Container } from '../components/layout/Container';
import { Grid, GridItem } from '../components/layout/Grid';
import { FlexBox } from '../components/layout/FlexBox';
import { heroText } from '../text/hero';
import '../components/themes/modern/assets/animation.css';
import Loader from '../components/themes/modern/animation';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedTitle = styled.h1`
  animation: ${fadeInLeft} 0.8s ease-out;
`;

const AnimatedSubtitle = styled.h2`
  animation: ${fadeInLeft} 0.8s ease-out 0.2s both;
`;

const AnimatedTagline = styled.p`
  animation: ${fadeInLeft} 0.8s ease-out 0.4s both;
`;

const AnimatedStatus = styled.p`
  animation: ${fadeInLeft} 0.8s ease-out 0.6s both;
`;

const AnimatedButtons = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;
`;

export const Hero = () => {
  return (
    <div style={{ 
      minHeight: '45vh', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0.5rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: '2rem'
      }}>
        
        {/* Left Side - Text Content */}
        <div style={{
          flex: '0 0 45%',
          textAlign: 'left',
          marginLeft: '3rem'
        }}>
          {/* Main Title - "Hi, I am" + Name */}
          <div>
            <AnimatedTitle style={{ 
              fontSize: '3.5rem', 
              fontWeight: '800', 
              color: '#2D3748', 
              marginBottom: '0.5rem', 
              lineHeight: 1.1,
              fontFamily: "'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: '-0.03em'
            }}>
              Hi, I am<br />
              <span 
                style={{
                  color: '#8B5CF6',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.textShadow = '0 4px 8px rgba(139, 92, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.textShadow = 'none';
                }}
              >
                {heroText.name}
              </span>.
            </AnimatedTitle>
            <AnimatedSubtitle style={{ 
              fontSize: '1.5rem', 
              color: '#6B7280', 
              marginBottom: '1rem', 
              fontWeight: '500' 
            }}>
              {heroText.title}
            </AnimatedSubtitle>
            <AnimatedTagline style={{ 
              fontSize: '1.1rem', 
              color: '#4B5563', 
              marginBottom: '0.5rem' 
            }}>
              {heroText.tagline}
            </AnimatedTagline>
            <AnimatedStatus style={{ 
              fontSize: '1rem', 
              color: '#10B981', 
              marginBottom: '2rem', 
              fontWeight: '500' 
            }}>
              {heroText.status}
            </AnimatedStatus>
          </div>

          {/* Call to Action Buttons */}
          <AnimatedButtons style={{ display: 'flex', gap: '1rem', width: '80%' }}>
            <button 
              onClick={() => window.location.href = '/about'}
              style={{ 
                background: '#8B5CF6', 
                color: 'white', 
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                flex: '0.6',
                boxShadow: '4px 4px 12px rgba(139, 92, 246, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '4px 6px 16px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '4px 4px 12px rgba(139, 92, 246, 0.3)';
              }}
            >
              ABOUT MYSELF
            </button>
            <button 
              onClick={() => window.location.href = '/projects'}
              style={{ 
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #E8EAF1 0%, #EBECF0 100%)',
                color: '#374151',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                cursor: 'pointer',
                fontSize: '1rem',
                flex: '0.6',
                boxShadow: `
                  4px 4px 8px rgba(0, 0, 0, 0.1),
                  inset -2px -2px 4px rgba(255, 255, 255, 0.8)
                `,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              PROJECTS
            </button>
          </AnimatedButtons>
        </div>

        {/* Right Side - Animation */}
        <div style={{
          flex: '0 0 45%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <div style={{
            width: '500px',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            {/* Floating Icons */}
            
            {/* Analytics Chart Icon - Top Right */}
            <div style={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E8EAF1 0%, #EBECF0 100%)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: `
                8px 8px 16px rgba(0, 0, 0, 0.1),
                inset -4px -4px 8px rgba(255, 255, 255, 0.8)
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#4a5568">
                <path d="M5 12L7 10L13 16L21 8L22.5 9.5L13 19L5 12Z"/>
                <path d="M3 3V21H21V19H5V3H3Z"/>
              </svg>
            </div>

            {/* Diamond Pattern Icon - Middle Left */}
            <div style={{
              position: 'absolute',
              top: '45%',
              left: '5%',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E8EAF1 0%, #EBECF0 100%)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: `
                8px 8px 16px rgba(0, 0, 0, 0.1),
                inset -4px -4px 8px rgba(255, 255, 255, 0.8)
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'float 3s ease-in-out infinite 0.5s'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#4a5568">
                <path d="M12 2L8 8H16L12 2Z"/>
                <path d="M8 8V16L12 22L16 16V8H8Z"/>
              </svg>
            </div>

            {/* Calendar/Task Icon - Bottom Middle */}
            <div style={{
              position: 'absolute',
              bottom: '15%',
              left: '30%',
              width: '75px',
              height: '75px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E8EAF1 0%, #EBECF0 100%)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: `
                8px 8px 16px rgba(0, 0, 0, 0.1),
                inset -4px -4px 8px rgba(255, 255, 255, 0.8)
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'float 3s ease-in-out infinite 1s'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#4a5568">
                <path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"/>
                <path d="M7 10H9V12H7V10ZM11 10H13V12H11V10ZM15 10H17V12H15V10Z"/>
              </svg>
            </div>

            {/* Cloud Icon - Bottom Right */}
            <div style={{
              position: 'absolute',
              bottom: '25%',
              right: '20%',
              width: '85px',
              height: '85px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E8EAF1 0%, #EBECF0 100%)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: `
                8px 8px 16px rgba(0, 0, 0, 0.1),
                inset -4px -4px 8px rgba(255, 255, 255, 0.8)
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'float 3s ease-in-out infinite 1.5s'
            }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#4a5568">
                <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.36 10.04Z"/>
              </svg>
            </div>

            {/* Central Animation */}
            <Loader />
          </div>
        </div>
      </div>
    </div>
  );
};