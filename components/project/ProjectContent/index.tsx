import Link from 'next/link';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { Project } from 'types/project';

interface Props {
  project: Project;
}

function ProjectContent({ project }: Props): ReactElement {
  const {
    deployLink,
    playStoreLink,
    oneStoreLink,
    webLink,
    linkTreeLink,
    description,
    program,
    team,
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

      {program?.length ? (
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
      ) : null}

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
        {/* LinkTree 링크 */}
        {linkTreeLink && (
          <Link href={linkTreeLink} passHref>
            <DeployLinkButton target="_blank">Link Tree</DeployLinkButton>
          </Link>
        )}

        {/* Web 링크 */}
        {webLink && (
          <Link href={webLink} passHref>
            <DeployLinkButton target="_blank">Web</DeployLinkButton>
          </Link>
        )}

        {/* App 링크(24기 이전에는 aos 또는 ios, 24기 이후로는 ios) */}
        {deployLink && (
          <Link href={deployLink} passHref>
            <DeployLinkButton target="_blank">App store</DeployLinkButton>
          </Link>
        )}

        {/* Play Store 링크 */}
        {playStoreLink && (
          <Link href={playStoreLink} passHref>
            <DeployLinkButton target="_blank">Play Store</DeployLinkButton>
          </Link>
        )}
        {/* One Store 링크 */}
        {oneStoreLink && (
          <Link href={oneStoreLink} passHref>
            <DeployLinkButton target="_blank">One Store</DeployLinkButton>
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
  flex: 1;
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

  ${media.mobile} {
    flex-direction: column;
    row-gap: 1.2rem;
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
    flex: 1;
    width: 100%;
    padding: 18px 24px;
    ${({ theme }) => theme.textStyle.mobile.Button_Point};

    margin-left: 0px !important;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export default ProjectContent;
