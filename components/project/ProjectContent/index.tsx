import Link from 'next/link';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import theme from 'styles/theme';
import { Project } from 'types/project';
import {
  BtnArrowRight,
  AppStore,
  PlayStore,
  WebLink,
} from 'public/assets/icons';
import { Button } from 'components/common';

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
          <Link href={linkTreeLink} passHref target="_blank">
            <DeployLinkButton variant="black">Link Tree</DeployLinkButton>
          </Link>
        )}

        {/* Web 링크 */}
        {webLink && (
          <Link href={webLink} passHref target="_blank">
            <DeployLinkButton variant="black">
              <WebLink />
              Web
              <BtnArrowRight />
            </DeployLinkButton>
          </Link>
        )}

        {/* App 링크(24기 이전에는 aos 또는 ios, 24기 이후로는 ios) */}
        {deployLink && (
          <Link href={deployLink} passHref target="_blank">
            <DeployLinkButton variant="black">
              <AppStore />
              App Store
              <BtnArrowRight />
            </DeployLinkButton>
          </Link>
        )}

        {/* Play Store 링크 */}
        {playStoreLink && (
          <Link href={playStoreLink} passHref target="_blank">
            <DeployLinkButton variant="black">
              <PlayStore />
              Play Store
              <BtnArrowRight />
            </DeployLinkButton>
          </Link>
        )}
        {/* One Store 링크 */}
        {oneStoreLink && (
          <Link href={oneStoreLink} passHref target="_blank">
            <DeployLinkButton variant="black">One Store</DeployLinkButton>
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
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  color: ${({ theme }) => theme.palette.black_100};
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

const BodyText = styled.div`
  display: flex;
  flex: 1;
  ${({ theme }) => theme.textStyleV2.fix.font_18};
  color: ${({ theme }) => theme.palette.black_70};
  flex-wrap: wrap;
`;

const TextItem = styled.div`
  margin-right: 6px;
`;

const DeployBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  ${media.tablet} {
    justify-content: center;
  }

  ${media.mobile} {
    flex-direction: column;
    row-gap: 1.2rem;
  }
`;

const DeployLinkButton = styled(Button)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 12px;

  background-color: ${theme.palette.grey_850};
  color: ${theme.palette.white};
  ${theme.textStyleV2.resp.body_point_md};

  ${media.mobile} {
    ${theme.textStyleV2.resp.body_point_sm};
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export default ProjectContent;
