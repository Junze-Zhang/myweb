import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 1.5rem 2rem;
  margin: 0 2rem 1rem;
  background: #E5E7EB;
  border-radius: 20px;
  text-align: center;
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.1),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
`;

export const FooterText = styled.p`
  color: #6B7280;
  font-size: 0.875rem;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: #8B5CF6;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    color: #7C3AED;
    text-decoration: underline;
  }
`;