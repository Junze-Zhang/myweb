// Layout and component interfaces
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface SectionProps extends LayoutProps {
  title?: string;
  subtitle?: string;
}

// Navigation interfaces
export interface NavigationLink {
  label: string;
  href: string;
  section?: string;
  external?: boolean;
}

export interface SocialLink extends NavigationLink {
  icon: string;
}

// Project interfaces
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  isClickable: boolean;
  url?: string;
  image?: string;
}

// Skills interfaces
export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SkillsData {
  title: string;
  categories: {
    [key: string]: SkillCategory;
  };
}

// Theme interfaces
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
    error: string;
    surface: string;
    border: string;
    muted: string;
    success: string;
    warning: string;
  };
  typography: {
    heading: {
      family: string;
      weight: string;
      lineHeight: string;
    };
    body: {
      family: string;
      weight: string;
      size: string;
      lineHeight: string;
    };
    code: {
      family: string;
    };
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  layout: {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    containers: {
      maxWidth: string;
    };
    grid: {
      columns: string;
      gap: string;
    };
  };
  effects: {
    shadows: {
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
    borders: {
      radius: {
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
      };
      width: {
        thin: string;
        base: string;
        thick: string;
      };
    };
    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
    animations: {
      fadeIn: string;
      slideIn: string;
      bounce: string;
    };
  };
  modern?: {
    glassmorphism: {
      background: string;
      backdrop: string;
      border: string;
    };
    neumorphism: {
      light: string;
      dark: string;
    };
    gradients: {
      primary: string;
      secondary: string;
      subtle: string;
    };
  };
}