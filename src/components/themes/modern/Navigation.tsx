import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 2rem;
  margin: 1rem 2rem;
  margin-bottom: 0;
  background: #E5E7EB;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.1),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
`;

export const NavigationBrand = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #374151;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #8B5CF6;
    transform: translateY(-1px);
  }
`;

export const NavigationLink = styled.a`
  color: #6B7280;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: #E5E7EB;
  transition: all 0.2s ease;

  &:hover {
    color: #8B5CF6;
    box-shadow: 
      inset 2px 2px 4px rgba(0, 0, 0, 0.1),
      inset -2px -2px 4px rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: 2px solid #8B5CF6;
    outline-offset: 2px;
  }
`;

export const NavigationSocialLink = styled.a`
  padding: 0.75rem;
  border-radius: 12px;
  color: #6B7280;
  text-decoration: none;
  background: #E5E7EB;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  box-shadow: 
    4px 4px 8px rgba(0, 0, 0, 0.1),
    -4px -4px 8px rgba(255, 255, 255, 0.8);

  &:hover {
    color: #8B5CF6;
    transform: translateY(-2px);
    box-shadow: 
      6px 6px 12px rgba(0, 0, 0, 0.15),
      -6px -6px 12px rgba(255, 255, 255, 0.9);
  }

  &:focus {
    outline: 2px solid #8B5CF6;
    outline-offset: 2px;
  }

  &.navigation__social-link--github::before {
    content: '📘';
    font-size: 20px;
  }

  &.navigation__social-link--linkedin::before {
    content: '💼';
    font-size: 20px;
  }

  &.navigation__social-link--email::before {
    content: '📧';
    font-size: 20px;
  }
`;