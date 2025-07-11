import type { LayoutProps } from '../../types';

interface GridProps extends LayoutProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  responsive?: boolean;
}

export const Grid = ({ 
  children, 
  className = '', 
  id,
  columns = 1,
  gap = 'md',
  responsive = true 
}: GridProps) => {
  return (
    <div 
      className={`grid grid--${columns}col grid--gap-${gap} ${responsive ? 'grid--responsive' : ''} ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

interface GridItemProps extends LayoutProps {
  span?: 1 | 2 | 3 | 4;
}

export const GridItem = ({ 
  children, 
  className = '', 
  id,
  span = 1 
}: GridItemProps) => {
  return (
    <div 
      className={`grid-item grid-item--span-${span} ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};