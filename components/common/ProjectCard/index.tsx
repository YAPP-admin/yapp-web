import { memo } from 'react';
import styled, { css } from 'styled-components';
import { Badge, AnimatedImage } from 'components/common';
import Link from 'next/link';
import media from 'styles/media';
import { fadeIn } from 'styles/utils-styles';
import { ProjectCardType } from 'types/project';

interface ProjectCardProps {
  project: ProjectCardType;
  isSubCard?: boolean;
}

function ProjectCard({ project, isSubCard }: ProjectCardProps) {
  const { title, thumbnail, tags, generation, url } = project;

  return (
    <Link href={isSubCard ? `${url}` : `project/${url}`} passHref>
      <StyledProjectCard>
        <AnimatedImage
          className="project-card-image"
          src={thumbnail}
          alt="project-image"
          height={214}
        />
        <ContentContainer>
          <DetailWrapper>
            {isSubCard ? (
              <ProjectSubTitleWrapper>{title}</ProjectSubTitleWrapper>
            ) : (
              <>
                <ProjectTitleWrapper>{title}</ProjectTitleWrapper>
                <Badge backgroundColor="black_5">{`${generation}기`}</Badge>
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
  animation: ${fadeIn} 0.5s ease-in-out;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  transition: filter 0.5s;

  filter: drop-shadow(
    0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '10'}
  );

  :hover {
    filter: drop-shadow(
      0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '30'}
    );
  }

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
  color: ${({ theme }) => theme.palette.grey_850};

  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

const ProjectSubTitleWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.grey_850};

  ${({ theme }) => theme.textStyleV2.resp.body_point_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

const TagWrapper = styled.div`
  margin: 0;
`;

const Tag = styled.div`
  display: inline;
  margin-right: 4px;
  color: ${({ theme }) => theme.palette.grey_500};
  ${({ theme }) => theme.textStyleV2.resp.caption_md};
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.caption_sm};
  }
`;

export default memo(ProjectCard);
