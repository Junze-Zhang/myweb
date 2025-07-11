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
export const ExperienceContainer = styled.div`
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
    background: radial-gradient(circle at 25% 75%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 75% 25%, rgba(99, 102, 241, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const ExperienceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Page Title
export const PageTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1rem;
`;

export const PageTitleUnderline = styled.div`
  width: 100px;
  height: 4px;
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
  border-radius: 2px;
  margin: 0 auto;
`;

// Section Styles
export const SectionContainer = styled.div`
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
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

// Timeline Styles
export const TimelineContainer = styled.div`
  position: relative;
  margin-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 25px;
    top: 25px;
    bottom: -2rem;
    width: 2px;
    background: linear-gradient(180deg, #8B5CF6 0%, #E5E7EB 100%);
    z-index: 0;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  animation: ${fadeInUp} 0.8s ease-out;
  
  &:nth-child(1) { animation-delay: 0.2s; animation-fill-mode: both; }
  &:nth-child(2) { animation-delay: 0.4s; animation-fill-mode: both; }
  &:nth-child(3) { animation-delay: 0.6s; animation-fill-mode: both; }
  &:nth-child(4) { animation-delay: 0.8s; animation-fill-mode: both; }
`;

export const TimelineDotContainer = styled.div`
  flex-shrink: 0;
  z-index: 1;
  position: relative;
`;

export const TimelineContent = styled.div`
  position: relative;
  flex: 1;
  margin-top: 0.5rem;
`;

export const CardContentWrapper = styled.div`
  padding: 2rem;
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

// Content Header
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ContentInfo = styled.div`
  flex: 1;
`;

export const ContentTitle = styled.h3`
  color: #8B5CF6;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #7C3AED;
  }
`;

export const ContentSubtitle = styled.p`
  color: #374151;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1F2937;
  }
`;

export const ContentLocation = styled.p`
  color: #6B7280;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4B5563;
  }
`;

export const PeriodBadge = styled.div`
  background: linear-gradient(145deg, #f0f2f5, #e8eaf0);
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 120px;
  text-align: center;
  white-space: nowrap;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.8);
    background: linear-gradient(145deg, #f5f7fa, #ebeef2);
  }
`;

// Education Highlights
export const HighlightsContainer = styled.div`
  margin-top: 1rem;
`;

export const HighlightsTitle = styled.h4`
  color: #374151;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1F2937;
  }
`;

export const HighlightsList = styled.ul`
  color: #6B7280;
  margin-left: 1rem;
  line-height: 1.6;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4B5563;
  }
`;

export const HighlightItem = styled.li`
  margin-bottom: 0.25rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateX(4px);
    color: #374151;
  }
`;

// Experience Summary
export const ExperienceSummary = styled.p`
  color: #6B7280;
  line-height: 1.6;
  margin-top: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4B5563;
  }
`;

// Experience Tags
export const TagsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  background: linear-gradient(145deg, #f0f2f5, #e8eaf0);
  color: #374151;
  padding: 0.3rem 0.7rem;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(255, 255, 255, 0.8);
    transform: translateY(1px);
    background: linear-gradient(145deg, #f5f7fa, #ebeef2);
  }
`;