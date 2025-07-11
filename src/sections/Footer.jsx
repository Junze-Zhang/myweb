import { Container } from '../components/layout/Container';
import { footerText } from '../text/footer';

export const Footer = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      paddingTop: '1rem', 
      width: '100%', 
      background: 'transparent',
      textAlign: 'center'
    }}>
      <Container maxWidth="full" padding={false}>
        <p style={{ margin: 0, color: '#6B7280', fontSize: '0.875rem' }}>
          {footerText.copyright} • Built with React & TypeScript • 
          <a 
            href={`mailto:${footerText.contact.email}`}
            style={{ color: '#8B5CF6', textDecoration: 'none', marginLeft: '0.25rem' }}
          >
            {footerText.contact.email}
          </a>
        </p>
      </Container>
    </div>
  );
};