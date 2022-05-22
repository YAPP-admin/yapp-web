import { memo } from 'react';
import styled, { css } from 'styled-components';
import { Badge, Card, AnimatedImage } from 'components/common';
import Link from 'next/link';
import media from 'styles/media';
import { fadeIn } from 'styles/utils-styles';
import { ProjectUIModel } from 'types/project';

interface ProjectCardProps {
  project: ProjectUIModel;
  isSubCard?: boolean;
}

function ProjectCard({ project, isSubCard }: ProjectCardProps) {
  const { title, thumbnail, tags, generation, url } = project;

  return (
    <Link href={isSubCard ? `${url}` : `project/${url}`}>
      <StyledProjectCard isSubCard={isSubCard}>
        <AnimatedImage
          className="project-card-image"
          src={thumbnail}
          alt="project-image"
          height={214}
        />
        <ContentContainer isSubCard={isSubCard}>
          <DetailWrapper>
            {isSubCard ? (
              <ProjectSubTitleWrapper>{title}</ProjectSubTitleWrapper>
            ) : (
              <>
                <ProjectTitleWrapper>{title}</ProjectTitleWrapper>
                <Badge>{generation}</Badge>
              </>
            )}
          </DetailWrapper>
          <TagWrapper>
            {tags.map((tag) => (
              <Tag key={tag}>{'#' + tag} </Tag>
            ))}
          </TagWrapper>
        </ContentContainer>
      </StyledProjectCard>
    </Link>
  );
}

const StyledProjectCard = styled.div<{ isSubCard?: boolean }>`
  width: 380px;
  height: 326px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  overflow: hidden;
  will-change: transform;
  animation: ${fadeIn} 0.7s ease-in-out;

  ${({ isSubCard }) =>
    isSubCard
      ? css`
          .project-card-image {
            border-radius: 20px;
          }
        `
      : css`
          filter: drop-shadow(
            0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '10'}
          );
          transition: filter 0.5s;
          :hover {
            filter: drop-shadow(
              0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '30'}
            );
          }
        `}

  ${media.mobile} {
    width: 335px;
    height: 294px;
  }

  > .project-card-image {
    ${media.mobile} {
      height: 188px;
    }
  }
`;

const ContentContainer = styled.div<{ isSubCard?: boolean }>`
  margin: 24px;
  ${media.mobile} {
    margin: 20px 24px;
  }
  ${({ isSubCard }) =>
    isSubCard &&
    css`
      margin: 16px 0 0 0;
      ${media.mobile} {
        margin: 10px 0 0 0;
      }
    `}
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 37px;
`;

const ProjectTitleWrapper = styled.span`
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.textStyle.web.Subtitle_1};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Subtitle};
  }
`;

const ProjectSubTitleWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => theme.textStyle.web.Subtitle_2};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Subtitle};
  }
`;

const TagWrapper = styled.div`
  margin-top: 6px;
`;

const Tag = styled.div`
  display: inline;
  margin-right: 4px;
  color: ${({ theme }) => theme.palette.grey_500};
  ${({ theme }) => theme.textStyle.web.Body_2};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_3};
  }
`;

export default memo(ProjectCard);
