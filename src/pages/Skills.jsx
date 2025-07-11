import { skillsText } from '../text/skills';
import NeumorphicAnimatedCard from '../components/themes/modern/NeumorphicAnimatedCard';
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsSection,
  CategoryTitle,
  SkillsCardContainer,
  SkillsCardWrapper,
  SkillsGrid,
  SkillPill
} from '../components/themes/modern/SkillsStyles';

export const Skills = () => {
  const SkillsCategoryComponent = ({ category }) => (
    <SkillsSection>
      <CategoryTitle>{category.title}</CategoryTitle>
      <SkillsCardContainer>
        <div style={{ position: 'relative', width: '100%' }}>
          <SkillsCardWrapper>
            <SkillsGrid>
              {category.skills.map((skill, index) => (
                <SkillPill key={index}>
                  {skill}
                </SkillPill>
              ))}
            </SkillsGrid>
          </SkillsCardWrapper>
          <NeumorphicAnimatedCard />
        </div>
      </SkillsCardContainer>
    </SkillsSection>
  );

  return (
    <SkillsContainer>
      <SkillsWrapper>
        {/* Software Development Section */}
        <SkillsCategoryComponent category={skillsText.categories.softwareDevelopment} />
        
        {/* Data Science Section */}
        <SkillsCategoryComponent category={skillsText.categories.dataScience} />
        
        {/* DevOps Section */}
        <SkillsCategoryComponent category={skillsText.categories.devOps} />
      </SkillsWrapper>
    </SkillsContainer>
  );
};