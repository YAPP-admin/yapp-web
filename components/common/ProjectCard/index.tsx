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
  const { title, thumbnail, thumbnailBlurDataURL, tags, generation, url } =
    project;

  return (
    <Link href={isSubCard ? `${url}` : `project/${url}`} passHref>
      <StyledProjectCard $isSubCard={isSubCard}>
        <AnimatedImage
          className="project-card-image"
          src={thumbnail}
          blurDataURL={thumbnailBlurDataURL}
          sizes={
            isSubCard
              ? '(max-width: 833px) 335px, 380px'
              : '(max-width: 833px) calc((100vw - 32px) / 2), 326px'
          }
          quality={90}
          alt="project-image"
          height={214}
        />
        <ContentContainer className="project-card-content">
          <DetailWrapper className="project-card-detail">
            {isSubCard ? (
              <ProjectSubTitleWrapper>{title}</ProjectSubTitleWrapper>
            ) : (
              <>
                <ProjectTitleWrapper className="project-card-title">
                  {title}
                </ProjectTitleWrapper>
                <Badge backgroundColor="black_5">{`${generation}기`}</Badge>
              </>
            )}
          </DetailWrapper>
          <TagWrapper className="project-card-tags">
            {tags.map((tag) => (
              <Tag key={tag}>{'#' + tag} </Tag>
            ))}
          </TagWrapper>
        </ContentContainer>
      </StyledProjectCard>
    </Link>
  );
}

const StyledProjectCard = styled.div<{ $isSubCard?: boolean }>`
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
    /* 화면이 카드보다 좁을 때(320px 등) 잘리지 않도록 */
    max-width: calc(100vw - 24px);
    height: 294px;
  }

  > .project-card-image {
    ${media.mobile} {
      height: auto;
      aspect-ratio: 335 / 188;
    }
  }

  ${({ $isSubCard, theme }) =>
    !$isSubCard &&
    css`
      width: 100%;
      height: 282px;
      border-radius: 12px;

      > .project-card-image {
        height: auto;
        aspect-ratio: 16 / 9;
      }

      .project-card-content {
        margin: 16px;
      }

      .project-card-detail {
        gap: 8px;
      }

      .project-card-title {
        width: auto;
        min-width: 0;
        white-space: nowrap;
      }

      .project-card-tags {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      ${media.mobile} {
        width: 100%;
        max-width: none;
        height: auto;
        min-height: 160px;

        > .project-card-image {
          aspect-ratio: 164 / 96;
        }

        .project-card-content {
          margin: 12px;
        }

        .project-card-detail {
          height: 24px;
          align-items: flex-start;
        }

        .project-card-title {
          ${theme.textStyleV2.resp.body_point_sm};
          font-size: 14px;
          line-height: 22px;
        }

        .project-card-detail > div {
          padding: 2px 6px;
          font-size: 10px;
          line-height: 18px;
        }

        .project-card-tags > div {
          font-size: 10px;
          line-height: 16px;
        }

        .project-card-tags {
          font-size: 10px;
          line-height: 16px;
        }
      }
    `}
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

  /* 카드가 좁아져도 기수 배지가 눌려서 줄바꿈되지 않도록 */
  > div {
    flex-shrink: 0;
  }
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
