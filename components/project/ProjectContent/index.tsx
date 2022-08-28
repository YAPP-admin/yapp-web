import Tag from 'components/common/Tag';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { Project } from 'types/project';

interface Props {
  project: Project;
}

function ProjectContent({ project }: Props): ReactElement {
  const { deployLink, webLink, description, program, team } = project;

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

      <Description>
        <BodyText>
          {description.split('<br />').map((txt, index) => (
            <React.Fragment key={index}>
              {txt}
              <br />
            </React.Fragment>
          ))}
        </BodyText>
      </Description>

      <DeployBox>
        {/* App 링크 */}
        {deployLink && (
          <Link href={deployLink} passHref>
            <DeployLinkButton target="_blank">App store</DeployLinkButton>
          </Link>
        )}
        {/* Web 링크 */}
        {webLink && (
          <Link href={webLink} passHref>
            <DeployLinkButton target="_blank">Web link</DeployLinkButton>
          </Link>
        )}
      </DeployBox>
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

const Description = styled.div`
  display: flex;
  align-items: center;
  margin: 38px 0 67px 0;
  ${media.tablet} {
    margin: 38px 0 112px 0;
  }
  ${media.mobile} {
    margin: 20px 0 32px 0;
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

const DeployBox = styled.div`
  display: flex;
  justify-content: flex-start;
  ${media.tablet} {
    justify-content: center;
  }
`;

const DeployLinkButton = styled.a`
  padding: 20px 24px;
  cursor: pointer;
  border-radius: 150px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 148px;
  box-sizing: border-box;
  ${({ theme }) => css`
    background-color: ${theme.palette.grey_850};
    color: ${theme.palette.white};
    ${theme.textStyle.web.Button_Point};
  `}
  ${media.mobile} {
    width: 122px;
    padding: 18px 24px;
    ${({ theme }) => theme.textStyle.mobile.Button_Point};
  }

  &:not(:first-child) {
    margin-left: 30px;
  }
`;

export default ProjectContent;
