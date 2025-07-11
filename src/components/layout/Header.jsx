
export const Header = ({ 
  brandName, 
  navigationLinks, 
  socialLinks, 
  onThemeToggle,
  brandStyles = {},
  navigationStyles = {},
  socialButtonComponent: SocialButton,
  diceButtonComponent: DiceButton,
  children
}) => {
  return (
    <header>
      {children ? children : (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          
          {/* Brand Name - Left */}
          <div style={{ 
            flex: '0 0 auto',
            display: 'flex',
            alignItems: 'center',
            height: '40px'
          }}>
            <a 
              href="/" 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                lineHeight: 1,
                ...brandStyles
              }}
            >
              {brandName}
            </a>
          </div>

          {/* Navigation Links - Center */}
          <nav style={{ flex: '1', display: 'flex', justifyContent: 'flex-start', marginLeft: '3rem' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', height: '40px' }}>
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (!link.external) {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'opacity 0.2s ease',
                    cursor: 'pointer',
                    ...navigationStyles
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '0.7';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '1';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Action Buttons - Right */}
          <div style={{ 
            flex: '0 0 auto', 
            display: 'flex', 
            gap: '1rem', 
            alignItems: 'center',
            height: '40px',
            transform: 'translateY(3px)'
          }}>
            {/* Theme Toggle Dice Button */}
            <DiceButton onClick={onThemeToggle} />
            
            {/* Social Links */}
            {socialLinks.map((social) => (
              <SocialButton 
                key={social.label}
                icon={social.icon}
                href={social.href}
                label={social.label}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};