import { ModernHeader } from '../components/themes/modern/ModernHeader';

export const Navigation = () => {
  const handleThemeToggle = () => {
    // TODO: Implement theme switching logic when multiple themes are ready
    console.log('Theme toggle clicked - future implementation');
  };

  return <ModernHeader onThemeToggle={handleThemeToggle} />;
};