import { memo } from 'react';
import styled from 'styled-components';
import { AnimatedImage } from 'components/common';
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
  /* 기수는 배지로 보여 주므로 태그 줄에서는 뺀다 */
  const platformTags = tags.filter((tag) => !/^\d+기$/.test(tag));

  return (
    <Link href={isSubCard ? `${url}` : `project/${url}`} passHref>
      <StyledProjectCard>
        <AnimatedImage
          className="project-card-image"
          src={thumbnail}
          blurDataURL={thumbnailBlurDataURL}
          sizes="(max-width: 833px) calc((100vw - 32px) / 2), 331px"
          quality={90}
          alt={`${title} 대표 이미지`}
          height={214}
        />
        <ContentContainer>
          <DetailWrapper>
            <ProjectTitleWrapper>{title}</ProjectTitleWrapper>
            <GenerationBadge>{`${generation}기`}</GenerationBadge>
          </DetailWrapper>
          <TagWrapper>
            {platformTags.map((tag) => (
              <Tag key={tag}>{'#' + tag} </Tag>
            ))}
          </TagWrapper>
        </ContentContainer>
      </StyledProjectCard>
    </Link>
  );
}

/* 목록과 상세의 '더 둘러보기'가 같은 카드 모양을 쓴다 */
const StyledProjectCard = styled.div`
  width: 100%;
  /* 시안: 325x282, 모서리 12px */
  height: 282px;
  border-radius: 12px;
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

  > .project-card-image {
    height: auto;
    aspect-ratio: 16 / 9;

    /*
     * 불러온 썸네일의 비율이 자리와 소수점만큼 달라 위아래로 카드 바탕색이 가늘게 비친다.
     * 1% 키워 덮는다. 정사각형인 옛 썸네일은 잘리지 않고 그대로 보인다.
     */
    img {
      transform: scale(1.01);
    }
  }

  /* 시안: 360 화면의 164x160 카드, 모서리 8px */
  ${media.small} {
    height: auto;
    min-height: 160px;
    border-radius: 8px;

    > .project-card-image {
      aspect-ratio: 164 / 96;

      /*
       * 이 자리(164:96)는 16:9 썸네일보다 세로가 길어 위아래로 1.9px씩 비고, 1%로는 다 덮이지 않는다.
       * 5% 키워 덮는다(16:9 썸네일은 좌우가 2%쯤 잘린다. 시안도 이 자리에 맞춰 잘라 넣었다).
       */
      img {
        transform: scale(1.05);
      }
    }
  }
`;

/* 시안: 이미지 아래 16px, 좌우·아래 20px (360 화면은 10px, 12px) */
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px 20px 20px;

  ${media.small} {
    margin: 10px 12px 12px;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  height: 34px;

  ${media.small} {
    height: 22px;
  }
`;

const ProjectTitleWrapper = styled.span`
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.palette.grey_850};
  ${({ theme }) => theme.textStyleV2.fix.font_20};
  font-weight: 600;

  ${media.small} {
    font-size: ${({ theme }) => theme.fontSize.size_15};
    line-height: 1.3;
  }
`;

/* 카드가 좁아져도 기수 배지가 눌려서 줄바꿈되지 않게 한다 */
const GenerationBadge = styled.span`
  flex-shrink: 0;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  color: ${({ theme }) => theme.palette.grey_600};
  ${({ theme }) => theme.textStyleV2.fix.font_16};

  ${media.small} {
    padding: 4px 6px;
    border-radius: 4px;
    font-size: 0.6875rem;
    line-height: 1.3;
  }
`;

const TagWrapper = styled.div`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.palette.grey_400};
  ${({ theme }) => theme.textStyleV2.fix.font_15};
  font-weight: 600;

  ${media.small} {
    ${({ theme }) => theme.textStyleV2.fix.font_12};
    line-height: 1.3;
  }
`;

const Tag = styled.span``;

export default memo(ProjectCard);
