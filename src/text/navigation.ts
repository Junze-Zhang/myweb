export const navigationText = {
  // Theme-specific brand names
  brandNames: {
    modern: "junzezhang.com",
    nostalgic: "Junze Zhang's Time Machine",
    cyberpunk: "Junze Zhang",
    minimalistic: "J.Z.",
    geeky: "~/junze-zhang",
    ugly: "Junze Zhang's attempt to annoy designers"
  },
  
  links: [
    { label: "About", href: "/about", external: true },
    { label: "Experience", href: "/experience", external: true },
    { label: "Skills", href: "/skills", external: true }, 
    { label: "Projects", href: "/projects", external: true },
    { label: "Contact", href: "/contact", external: true }
  ],
  
  // Updated social/action links with dice icon for random theme
  actions: [
    {
      label: "Random Theme",
      href: "#",
      icon: "dice",
      action: "randomTheme",
      external: false
    }
  ],
  
  social: [
    { 
      label: "GitHub", 
      href: "https://github.com/Junze-Zhang", 
      icon: "github",
      external: true 
    },
    { 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/junze-zhang7/", 
      icon: "linkedin",
      external: true 
    },
    { 
      label: "Email", 
      href: "mailto:iamjunze@gmail.com",
      icon: "email",
      external: true 
    }
  ]
};