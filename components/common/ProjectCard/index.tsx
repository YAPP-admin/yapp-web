import styled from 'styled-components';
import { Badge } from 'components/common';
import Link from 'next/link';
import Image from 'next/image';
import media from 'styles/media';

interface ProjectCardProps {
  project: any;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, thumbnail, tags, generation, url } = project;

  return (
    <Link href={`project/${url}`}>
      <StyledProjectCard>
        <ImageWrapper>
          <div className="image-scale-wrapper">
            <Image
              src={thumbnail}
              alt="project-thumbnail"
              layout="fill"
              placeholder="blur"
              blurDataURL={thumbnail}
            />
          </div>
        </ImageWrapper>
        <ContentContainer>
          <DetailWrapper>
            <ProjectTitleWrapper>{title}</ProjectTitleWrapper>
            <Badge>{generation}</Badge>
          </DetailWrapper>
          <TagWrapper>
            {tags.map((tag: string) => (
              <Tag key={tag}>{'#' + tag} </Tag>
            ))}
          </TagWrapper>
        </ContentContainer>
      </StyledProjectCard>
    </Link>
  );
}

const StyledProjectCard = styled.div`
  width: 380px;
  height: 326px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.palette.white};
  cursor: pointer;

  ${media.mobile} {
    width: 335px;
    height: 294px;
  }

  transition: filter 0.5s;
  :hover {
    filter: drop-shadow(
      0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '30'}
    );

    .image-scale-wrapper {
      transform: scale(1.05);
    }
  }

  .image-scale-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
  }
`;

const ImageWrapper = styled.div`
  height: 214px;
  overflow: hidden;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  ${media.mobile} {
    height: 188px;
  }
`;

const ContentContainer = styled.div`
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

  ${({ theme }) => theme.textStyle.web.Subtitle_1};
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

export default ProjectCard;
