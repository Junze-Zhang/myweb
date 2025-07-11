import { Section } from '../components/layout/Section';
import { Grid, GridItem } from '../components/layout/Grid';
import { FlexBox } from '../components/layout/FlexBox';
import { aboutText } from '../text/about';

export const About: React.FC = () => {
  return (
    <Section className="about" id="about" title={aboutText.title}>
      <Grid columns={2} responsive={true}>
        <GridItem span={1}>
          <FlexBox direction="column" gap="lg">
            {/* Education Timeline */}
            <div className="about__section">
              <h3 className="about__section-title">{aboutText.education.title}</h3>
              <div className="about__timeline">
                {aboutText.education.timeline.map((edu, index) => (
                  <div key={index} className="about__timeline-item">
                    <div className="about__timeline-period">{edu.period}</div>
                    <div className="about__timeline-content">
                      <h4 className="about__timeline-degree">{edu.degree}</h4>
                      <p className="about__timeline-program">{edu.program}</p>
                      <p className="about__timeline-institution">
                        {edu.institution}, {edu.location}
                      </p>
                      <div className="about__timeline-highlights">
                        <FlexBox direction="column" gap="sm">
                          {edu.highlights.map((highlight, idx) => (
                            <span key={idx} className="about__timeline-highlight">
                              • {highlight}
                            </span>
                          ))}
                        </FlexBox>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="about__section">
              <h3 className="about__section-title">{aboutText.experience.title}</h3>
              <div className="about__timeline">
                {aboutText.experience.timeline.map((exp, index) => (
                  <div key={index} className="about__timeline-item">
                    <div className="about__timeline-period">{exp.period}</div>
                    <div className="about__timeline-content">
                      <h4 className="about__timeline-degree">{exp.role}</h4>
                      <p className="about__timeline-program">{exp.company}</p>
                      <p className="about__timeline-institution">
                        {exp.location} • {exp.type}
                      </p>
                      <div className="about__timeline-summary">
                        <p className="about__timeline-summary-text">{exp.summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FlexBox>
        </GridItem>

        <GridItem span={1}>
          <FlexBox direction="column" gap="lg">
            {/* Personal Characteristics */}
            <div className="about__section">
              <h3 className="about__section-title">{aboutText.personality.title}</h3>
              <p className="about__section-content">{aboutText.personality.content}</p>
            </div>

            {/* Interests */}
            <div className="about__section">
              <h3 className="about__section-title">{aboutText.interests.title}</h3>
              <p className="about__section-content">{aboutText.interests.content}</p>
            </div>
          </FlexBox>
        </GridItem>
      </Grid>
    </Section>
  );
};