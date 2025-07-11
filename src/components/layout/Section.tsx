import type { SectionProps } from '../../types';
import { Container } from './Container';

export const Section = ({ 
  children, 
  className = '', 
  id,
  title,
  subtitle 
}: SectionProps) => {
  return (
    <section 
      className={`section ${className}`}
      id={id}
    >
      <Container>
        {title && (
          <div className="section__header">
            <h2 className="section__title">{title}</h2>
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section__content">
          {children}
        </div>
      </Container>
    </section>
  );
};