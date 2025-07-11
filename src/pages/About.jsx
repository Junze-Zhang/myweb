import { aboutText } from '../text/about';
import {
  AboutContainer,
  AboutGrid,
  TopRow,
  BottomRow,
  AboutMeCard,
  BackgroundPattern,
  FloatingParticle,
  AboutMeTitle,
  AboutMeSubtitle,
  ContentCard,
  ContentTitle,
  ContentText,
  ProjectsCard,
  ProjectsBackground,
  ProjectsIconContainer,
  ProjectsTitle,
  ProjectsSubtitle
} from '../components/themes/modern/AboutStyles';

export const About = () => {
  const handleProjectsClick = () => {
    window.location.href = '/projects';
  };

  return (
    <AboutContainer>
      <AboutGrid>
        {/* Top Row: 1fr 2fr */}
        <TopRow>
          {/* Top Left - About Me Picture Card (Square) */}
          <AboutMeCard tabIndex="-1">
            <BackgroundPattern />
            
            {/* Floating Particles */}
            <FloatingParticle className="particle-1" />
            <FloatingParticle className="particle-2" />
            <FloatingParticle className="particle-3" />
            
            <AboutMeTitle>About Me</AboutMeTitle>
            <AboutMeSubtitle>Creative Problem Solver</AboutMeSubtitle>
          </AboutMeCard>

          {/* Top Right - How I Approach Problems (Wide Rectangle) */}
          <ContentCard className="fade-right" tabIndex="-1">
            <ContentTitle>{aboutText.personality.title}</ContentTitle>
            <ContentText>{aboutText.personality.content}</ContentText>
          </ContentCard>
        </TopRow>

        {/* Bottom Row: 2fr 1fr */}
        <BottomRow>
          {/* Bottom Left - What Drives Me (Wide Rectangle) */}
          <ContentCard className="fade-left" tabIndex="-1">
            <ContentTitle>{aboutText.interests.title}</ContentTitle>
            <ContentText>{aboutText.interests.content}</ContentText>
          </ContentCard>

          {/* Bottom Right - My Projects (Square, Clickable) */}
          <ProjectsCard tabIndex="-1" onClick={handleProjectsClick}>
            <ProjectsBackground />
            
            <ProjectsIconContainer>
              {/* Arrow Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ProjectsIconContainer>
            
            <ProjectsTitle>My Projects</ProjectsTitle>
            <ProjectsSubtitle>Explore my work</ProjectsSubtitle>
          </ProjectsCard>
        </BottomRow>
      </AboutGrid>
    </AboutContainer>
  );
};