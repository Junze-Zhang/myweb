import { aboutText } from '../text/about';
import TimelineDot from '../components/themes/modern/TimelineDot';
import NeumorphicAnimatedCard from '../components/themes/modern/NeumorphicAnimatedCard';
import {
  ExperienceContainer,
  ExperienceWrapper,
  SectionContainer,
  SectionTitle,
  TimelineContainer,
  TimelineItem,
  TimelineDotContainer,
  TimelineContent,
  CardContentWrapper,
  ContentHeader,
  ContentInfo,
  ContentTitle,
  ContentSubtitle,
  ContentLocation,
  PeriodBadge,
  HighlightsContainer,
  HighlightsTitle,
  HighlightsList,
  HighlightItem,
  ExperienceSummary,
  TagsContainer,
  Tag
} from '../components/themes/modern/ExperienceStyles';

export const Experience = () => {
  const TimelineItemComponent = ({ item, isEducation = false }) => (
    <TimelineItem>
      <TimelineDotContainer>
        <TimelineDot />
      </TimelineDotContainer>
      <TimelineContent>
        <div style={{ position: 'relative', width: '100%' }}>
          <CardContentWrapper>
            <ContentHeader>
              <ContentInfo>
                <ContentTitle>
                  {isEducation ? item.degree : item.role}
                </ContentTitle>
                <ContentSubtitle>
                  {isEducation ? item.program : item.company}
                </ContentSubtitle>
                <ContentLocation>
                  {item.location}
                </ContentLocation>
              </ContentInfo>
              <PeriodBadge>
                {item.period}
              </PeriodBadge>
            </ContentHeader>
            
            {isEducation && item.highlights && (
              <HighlightsContainer>
                <HighlightsTitle>
                  Key Coursework:
                </HighlightsTitle>
                <HighlightsList>
                  {item.highlights.map((highlight, index) => (
                    <HighlightItem key={index}>
                      {highlight}
                    </HighlightItem>
                  ))}
                </HighlightsList>
              </HighlightsContainer>
            )}
            
            {!isEducation && item.summary && (
              <ExperienceSummary>
                {item.summary}
              </ExperienceSummary>
            )}
            
            {!isEducation && item.tags && (
              <TagsContainer>
                {item.tags.map((tag, index) => (
                  <Tag key={index}>
                    {tag}
                  </Tag>
                ))}
              </TagsContainer>
            )}
          </CardContentWrapper>
          <NeumorphicAnimatedCard />
        </div>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <ExperienceContainer>
      <ExperienceWrapper>
        {/* Education Section */}
        <SectionContainer>
          <SectionTitle>{aboutText.education.title}</SectionTitle>
          <TimelineContainer>
            {aboutText.education.timeline.map((item, index) => (
              <TimelineItemComponent key={index} item={item} isEducation={true} />
            ))}
          </TimelineContainer>
        </SectionContainer>

        {/* Professional Experience Section */}
        <SectionContainer>
          <SectionTitle>{aboutText.experience.title}</SectionTitle>
          <TimelineContainer>
            {aboutText.experience.timeline.map((item, index) => (
              <TimelineItemComponent key={index} item={item} isEducation={false} />
            ))}
          </TimelineContainer>
        </SectionContainer>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};