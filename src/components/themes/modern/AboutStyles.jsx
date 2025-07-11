import styled, { keyframes } from 'styled-components';

// Animations
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

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`;

// Styled Components
export const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const AboutGrid = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  aspect-ratio: 16/9;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  flex: 1;
`;

export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  flex: 1;
`;

export const AboutMeCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8B5CF6 100%);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  aspect-ratio: 1/1;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.8);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  animation: ${fadeInDown} 0.8s ease-out 0.1s both;
  
  &:focus {
    outline: none !important;
    border: none !important;
  }
  
  * {
    outline: none !important;
    border: none !important;
  }
`;

export const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 30%),
    radial-gradient(circle at 60% 70%, rgba(255,255,255,0.15) 0%, transparent 35%),
    radial-gradient(circle at 30% 80%, rgba(255,255,255,0.1) 0%, transparent 25%);
  border-radius: 20px;
`;

export const FloatingParticle = styled.div`
  position: absolute;
  background: rgba(255,255,255,0.4);
  border-radius: 50%;
  animation: ${float} 3s ease-in-out infinite;
  
  &.particle-1 {
    top: 15%;
    left: 20%;
    width: 8px;
    height: 8px;
    animation-duration: 3s;
  }
  
  &.particle-2 {
    top: 25%;
    right: 25%;
    width: 6px;
    height: 6px;
    background: rgba(255,255,255,0.3);
    animation-duration: 4s;
    animation-delay: 0.5s;
  }
  
  &.particle-3 {
    bottom: 20%;
    left: 30%;
    width: 10px;
    height: 10px;
    background: rgba(255,255,255,0.2);
    animation-duration: 3.5s;
    animation-delay: 1s;
  }
`;

export const AboutMeTitle = styled.h2`
  color: white;
  font-family: 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  letter-spacing: -0.02em;
  z-index: 1;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
`;

export const AboutMeSubtitle = styled.p`
  color: rgba(255,255,255,0.9);
  font-size: 1.1rem;
  font-weight: 500;
  z-index: 1;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
`;

export const ContentCard = styled.div`
  background: linear-gradient(145deg, #f5f7fa, #ebeef2);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8);
  cursor: pointer;
  
  &.fade-right {
    animation: ${fadeInRight} 0.8s ease-out 0.3s both;
  }
  
  &.fade-left {
    animation: ${fadeInLeft} 0.8s ease-out 0.5s both;
  }
  
  &:focus {
    outline: none !important;
    border: none !important;
  }
  
  * {
    outline: none !important;
    border: none !important;
  }
`;

export const ContentTitle = styled.h3`
  color: #8B5CF6;
  font-family: 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

export const ContentText = styled.p`
  color: #4B5563;
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-line;
`;

export const ProjectsCard = styled.div`
  background: linear-gradient(135deg, #374151 0%, #1F2937 100%);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  aspect-ratio: 1/1;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.8);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out 0.7s both;
  
  &:focus {
    outline: none !important;
    border: none !important;
  }
  
  * {
    outline: none !important;
    border: none !important;
  }
`;

export const ProjectsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), 
              radial-gradient(circle at 30% 70%, rgba(124, 58, 237, 0.2) 0%, transparent 50%);
  border-radius: 24px;
`;

export const ProjectsIconContainer = styled.div`
  background: rgba(139, 92, 246, 0.2);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  z-index: 1;
`;

export const ProjectsTitle = styled.h2`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  z-index: 1;
`;

export const ProjectsSubtitle = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 1;
`;