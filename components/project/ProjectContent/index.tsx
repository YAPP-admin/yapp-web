import { Button } from 'components/common';
import Tag from 'components/common/Tag';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { Project } from 'types/project';
import { ProjectTitle } from '../ProjectTitle';

interface Props {
  project: Project;
}

function ProjectContent({ project }: Props): ReactElement {
  const {
    content,
    deployLink,
    description,
    field,
    generation,
    program,
    tags,
    team,
    thumbnail,
  } = project;

  return (
    <Container>
      <Block>
        <SubTitle>팀원</SubTitle>
        <BodyText>
          {team.map((member) => (
            <TextItem key={member}>{member}</TextItem>
          ))}
        </BodyText>
      </Block>

      <Block>
        <SubTitle>프로그램</SubTitle>
        <BodyText>
          {program ? (
            program.map((program) => (
              <TextItem key={program}>{program}</TextItem>
            ))
          ) : (
            <>-</>
          )}
        </BodyText>
      </Block>

      <Block
        css={`
          margin: 38px 0 67px 0;
        `}
      >
        <BodyText>
          {description.split('<br />').map((txt, index) => (
            <React.Fragment key={index}>
              {txt}
              <br />
            </React.Fragment>
          ))}
        </BodyText>
      </Block>

      {deployLink && (
        <Button
          width={148}
          height={65}
          buttonColor="grey_850"
          fontColor="white"
        >
          App store
        </Button>
      )}
    </Container>
  );
}

const Container = styled.div``;

const Block = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${media.mobile} {
    flex-direction: column;
    align-items: unset;
  }
`;

const SubTitle = styled.div`
  display: inline-block;
  width: 170px;
  ${({ theme }) => theme.textStyle.web.Subtitle_2};
  color: ${({ theme }) => theme.palette.grey_800};
`;

const BodyText = styled.div`
  display: flex;
  ${({ theme }) => theme.textStyle.web.Body_1};
  color: ${({ theme }) => theme.palette.grey_850};
  flex-wrap: wrap;
`;

const TextItem = styled.div`
  margin-right: 6px;
`;

export default ProjectContent;
