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

// Main Container
export const SkillsContainer = styled.div`
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
    background: radial-gradient(circle at 35% 65%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 65% 35%, rgba(99, 102, 241, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Section Styles
export const SkillsSection = styled.div`
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
  
  &:nth-child(1) { animation-delay: 0.2s; animation-fill-mode: both; }
  &:nth-child(2) { animation-delay: 0.4s; animation-fill-mode: both; }
  &:nth-child(3) { animation-delay: 0.6s; animation-fill-mode: both; }
`;

export const CategoryTitle = styled.h2`
  color: #374151;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: left;
  position: relative;
  padding-bottom: 0.5rem;
  animation: ${fadeInLeft} 0.8s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
    border-radius: 2px;
  }
`;

// Skills Card Container
export const SkillsCardContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SkillsCardWrapper = styled.div`
  padding: 2.5rem;
  position: relative;
  z-index: 5;
  transition: all 0.3s ease;
  border-radius: 12px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

// Skills Grid
export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const SkillPill = styled.span`
  background: linear-gradient(145deg, #f0f2f5, #e8eaf0);
  color: #374151;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1), -1px -1px 3px rgba(255, 255, 255, 0.8);
    transform: translateY(1px);
    color: #8B5CF6;
    background: linear-gradient(145deg, #f5f7fa, #ebeef2);
  }
`;