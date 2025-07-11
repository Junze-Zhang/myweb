import { Section } from '../components/layout/Section';
import { Grid, GridItem } from '../components/layout/Grid';
import { FlexBox } from '../components/layout/FlexBox';
import { projectsText } from '../text/projects';

export const Projects: React.FC = () => {
  return (
    <Section className="projects" id="projects" title={projectsText.title}>
      {/* Horizontal scrollable container for film-style layout */}
      <div className="projects__container">
        <div className="projects__scroll-wrapper">
          <FlexBox direction="row" gap="lg">
            {projectsText.projects.map((project) => (
              <div key={project.id} className="projects__card">
                {/* Project Image/Thumbnail */}
                <div className="projects__card-image">
                  <div className="projects__image-placeholder">
                    {/* Placeholder for project image */}
                    <span className="projects__image-text">
                      Project
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="projects__card-content">
                  <FlexBox direction="column" gap="sm">
                    {/* Project Title */}
                    <h3 className="projects__card-title">{project.title}</h3>

                    {/* Project Description */}
                    <p className="projects__card-description">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="projects__tags">
                      <FlexBox direction="row" gap="sm" wrap={true}>
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="projects__tag">
                            {tech}
                          </span>
                        ))}
                      </FlexBox>
                    </div>
                  </FlexBox>
                </div>
              </div>
            ))}
          </FlexBox>
        </div>
      </div>

      {/* Responsive Grid Layout for smaller screens */}
      <div className="projects__grid-fallback">
        <Grid columns={2} responsive={true}>
          {projectsText.projects.map((project) => (
            <GridItem key={project.id} span={1}>
              <div className="projects__card projects__card--grid">
                <FlexBox direction="column" gap="md">
                  <h3 className="projects__card-title">{project.title}</h3>
                  
                  <p className="projects__card-description">
                    {project.description}
                  </p>
                  
                  <div className="projects__tags">
                    <FlexBox direction="row" gap="sm" wrap={true}>
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="projects__tag">
                          {tech}
                        </span>
                      ))}
                    </FlexBox>
                  </div>
                </FlexBox>
              </div>
            </GridItem>
          ))}
        </Grid>
      </div>
    </Section>
  );
};