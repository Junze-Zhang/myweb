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

export const ContactContainer = styled.div`
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
    background: radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.04) 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.04) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const ContactTitle = styled.h1`
  color: #374151;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ContactSubtitle = styled.h2`
  color: #8B5CF6;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ContactDescription = styled.p`
  color: #4B5563;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const ContactCard = styled.div`
  background: #f0f0f0;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

export const ContactIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const ContactMethodTitle = styled.h3`
  color: #8B5CF6;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const ContactMethodValue = styled.a`
  color: #374151;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #8B5CF6;
  }
`;

export const ContactMethodDescription = styled.p`
  color: #6B7280;
  font-size: 0.9rem;
  line-height: 1.5;
`;

export const AvailabilitySection = styled.div`
  background: #f0f0f0;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8);
  animation: ${fadeInLeft} 0.8s ease-out 0.6s both;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const AvailabilityTitle = styled.h3`
  color: #8B5CF6;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

export const AvailabilityStatus = styled.div`
  background: #10B981;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
`;

export const AvailabilityDescription = styled.p`
  color: #4B5563;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ResponseTime = styled.p`
  color: #6B7280;
  font-size: 0.9rem;
  text-align: center;
  font-style: italic;
`;

export const InterestsSection = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;
`;

export const InterestsTitle = styled.h3`
  color: #374151;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

export const InterestsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const InterestTag = styled.span`
  background: #e8e8e8;
  color: #374151;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(255, 255, 255, 0.8);
    transform: translateY(1px);
    color: #8B5CF6;
  }
`;

export const ContactFormSection = styled.div`
  background: linear-gradient(145deg, #f5f7fa, #ebeef2);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8);
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  
  &:hover {
    background: linear-gradient(145deg, #f8fafc, #f0f2f5);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ContactFormTitle = styled.h3`
  color: #8B5CF6;
  font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: -0.02em;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const ContactFormDescription = styled.p`
  color: #4B5563;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.delay || '0.4s'};
  animation-fill-mode: both;
`;

export const FormLabel = styled.label`
  color: #374151;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  background: linear-gradient(145deg, #f5f7fa, #ebeef2);
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  color: #374151;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: inset 2px 2px 4px rgba(139, 92, 246, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.9);
    background: linear-gradient(145deg, #f8fafc, #eff2f6);
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`;

export const FormTextarea = styled.textarea`
  background: linear-gradient(145deg, #f5f7fa, #ebeef2);
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  color: #374151;
  min-height: 120px;
  resize: vertical;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: inset 2px 2px 4px rgba(139, 92, 246, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.9);
    background: linear-gradient(145deg, #f8fafc, #eff2f6);
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`;

export const FormButton = styled.button`
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 8px rgba(139, 92, 246, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.8);
  animation: ${fadeInUp} 0.6s ease-out 1s both;
  letter-spacing: -0.01em;
  
  &:hover {
    background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
    box-shadow: 2px 2px 4px rgba(139, 92, 246, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.9);
    transform: translateY(1px);
  }
  
  &:active {
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.1);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: 4px 4px 8px rgba(139, 92, 246, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.8);
  }
`;

export const FormMessage = styled.div`
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  
  &.success {
    background: #D1FAE5;
    color: #065F46;
    border: 1px solid #10B981;
  }
  
  &.error {
    background: #FEE2E2;
    color: #991B1B;
    border: 1px solid #EF4444;
  }
`;