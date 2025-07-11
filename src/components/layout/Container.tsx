import type { LayoutProps } from '../../types';

interface ContainerProps extends LayoutProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

export const Container = ({ 
  children, 
  className = '', 
  id,
  maxWidth = 'lg',
  padding = true 
}: ContainerProps) => {
  return (
    <div 
      className={`container container--${maxWidth} ${padding ? 'container--padded' : ''} ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};