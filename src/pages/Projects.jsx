import React, { useState, useEffect } from 'react';
import { projectsText } from '../text/projects';
import CoverFlow from 'coverflow-react';
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsTitle,
  CoverflowContainer,
  ProjectDetails,
  ProjectDetailsCard,
  ProjectDetailsContent,
  ProjectTitle,
  ProjectUrl,
  ProjectDescription,
  TechnologiesContainer,
  TechnologyTag
} from '../components/themes/modern/ProjectsStyles';

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [previousIndex, setPreviousIndex] = useState(2);
  const [animationDirection, setAnimationDirection] = useState('right');
  const currentProject = projectsText.projects[activeIndex];
  
  const handleCoverflowSelect = (index) => {
    setPreviousIndex(activeIndex);
    setAnimationDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  };
  
  // Ensure CareerEasy (index 2) is selected on mount
  useEffect(() => {
    if (projectsText.projects.length > 2) {
      setActiveIndex(2);
    }
  }, []);
  
  const imagesArr = projectsText.projects.map(project => project.image);
  const labelsArr = projectsText.projects.map(project => project.title);

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <ProjectsTitle>Projects</ProjectsTitle>
        
        <CoverflowContainer>
          <CoverFlow
            imagesArr={imagesArr}
            handleSelect={handleCoverflowSelect}
            direction="horizontal"
            width="1200"
            height="250"
            itemRatio="32:17"
            background="transparent"
            labelsArr={labelsArr}
          />
        </CoverflowContainer>

        {currentProject && (
          <ProjectDetails key={activeIndex} animationDirection={animationDirection}>
            <ProjectDetailsCard />
            <ProjectDetailsContent>
              <ProjectTitle>{currentProject.title}</ProjectTitle>
              {currentProject.url && (
                <ProjectUrl 
                  href={currentProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Project
                </ProjectUrl>
              )}
              <ProjectDescription>{currentProject.description}</ProjectDescription>
              <TechnologiesContainer>
                {currentProject.technologies.map((tech, index) => (
                  <TechnologyTag key={index}>{tech}</TechnologyTag>
                ))}
              </TechnologiesContainer>
            </ProjectDetailsContent>
          </ProjectDetails>
        )}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};