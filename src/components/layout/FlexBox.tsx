import type { LayoutProps } from '../../types';

interface FlexBoxProps extends LayoutProps {
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  gap?: 'sm' | 'md' | 'lg';
}

export const FlexBox = ({ 
  children, 
  className = '', 
  id,
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = 'md'
}: FlexBoxProps) => {
  return (
    <div 
      className={`flexbox flexbox--${direction} flexbox--align-${align} flexbox--justify-${justify} ${wrap ? 'flexbox--wrap' : ''} flexbox--gap-${gap} ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};