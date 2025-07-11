import { Section } from '../components/layout/Section';
import { Grid, GridItem } from '../components/layout/Grid';
import { FlexBox } from '../components/layout/FlexBox';
import { skillsText } from '../text/skills';

export const Skills: React.FC = () => {
  return (
    <Section className="skills" id="skills" title={skillsText.title}>
      <Grid columns={3} responsive={true}>
        {Object.entries(skillsText.categories).map(([key, category]) => (
          <GridItem key={key} span={1}>
            <div className="skills__category">
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                <FlexBox direction="column" gap="sm">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skills__item">
                      <span className="skills__item-text">{skill}</span>
                    </div>
                  ))}
                </FlexBox>
              </div>
            </div>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};