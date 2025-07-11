import styled, { keyframes } from 'styled-components';
import NeumorphicAnimatedCard from './NeumorphicAnimatedCard';

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

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 60% 40%, rgba(99, 102, 241, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ProjectsTitle = styled.h1`
  color: #2D3748;
  font-family: 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const CoverflowContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  display: flex;
  justify-content: center;
  
  .coverflow-react {
    width: 100%;
    height: 250px;
    background: transparent !important;
  }
  
  /* Override coverflow library background styles but preserve images */
  .coverflow-react > div:not([style*="background-image"]) {
    background: transparent !important;
    background-color: transparent !important;
  }
  
  .coverflow-react canvas {
    background: transparent !important;
    background-color: transparent !important;
  }
  
  .coverflow-react .coverflow-container,
  .coverflow-react .coverflow-wrapper {
    background: transparent !important;
    background-color: transparent !important;
  }
  
  @media (max-width: 1024px) {
    max-width: 700px;
  }
  
  @media (max-width: 768px) {
    max-width: 500px;
    margin: 1rem auto;
  }
  
  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

export const ProjectDetails = styled.div`
  position: relative;
  margin: 2rem auto 0;
  max-width: 800px;
  min-height: 300px;
  animation: ${props => props.animationDirection === 'left' ? fadeInFromLeft : fadeInFromRight} 0.5s ease-out;
`;

export const ProjectDetailsCard = styled(NeumorphicAnimatedCard)`
  width: 100%;
  height: 100%;
`;

export const ProjectDetailsContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 10;
`;

export const ProjectTitle = styled.h2`
  color: #8B5CF6;
  font-family: 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
  text-align: center;
  
  &:hover {
    color: #7C3AED;
  }
`;

export const ProjectUrl = styled.a`
  display: inline-block;
  color: #8B5CF6;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #7C3AED;
    text-decoration: underline;
  }
  
  &::before {
    content: '🔗 ';
    margin-right: 0.5rem;
  }
`;

export const ProjectDescription = styled.p`
  color: #4B5563;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  &:hover {
    color: #374151;
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const TechnologyTag = styled.span`
  background: linear-gradient(145deg, #f0f2f5, #e8eaf0);
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 18px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
    color: #8B5CF6;
    background: linear-gradient(145deg, #f5f7fa, #ebeef2);
  }
`;