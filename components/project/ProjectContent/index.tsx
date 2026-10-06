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
    behanceLink,
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
        <DescriptionText>
          {description.split('<br />').map((txt, index) => (
            <React.Fragment key={index}>
              {txt}
              <br />
            </React.Fragment>
          ))}
        </DescriptionText>
      </Description>

      <DeployBox>
        {/* LinkTree 링크 */}
        {linkTreeLink && (
          <Link href={linkTreeLink} passHref target="_blank">
            <DeployLinkButton variant="black">Link Tree</DeployLinkButton>
          </Link>
        )}

        {/* Web 링크 */}
        {(Array.isArray(webLink) ? webLink : webLink ? [webLink] : []).map(
          (url, index) => (
            <Link key={`web-${index}`} href={url} passHref target="_blank">
              <DeployLinkButton variant="black">
                <WebLink />
                Web
                <BtnArrowRight />
              </DeployLinkButton>
            </Link>
          ),
        )}

        {/* Behance 링크 */}
        {(Array.isArray(behanceLink)
          ? behanceLink
          : behanceLink
          ? [behanceLink]
          : []
        ).map((url, index) => (
          <Link key={`behance-${index}`} href={url} passHref target="_blank">
            <DeployLinkButton variant="black">
              <WebLink />
              Behance
              <BtnArrowRight />
            </DeployLinkButton>
          </Link>
        ))}

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
            <DeployLinkButton variant="black">
              <OneStoreIcon aria-hidden="true" />
              One Store
              <BtnArrowRight />
            </DeployLinkButton>
          </Link>
        )}
      </DeployBox>
    </Container>
  );
}

const Container = styled.div``;

/* 시안: 제목 아래에 내용을 쌓는다 (제목과 내용 사이 4px, 묶음 사이 22px) */
const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 22px;
`;

const Description = styled.div`
  margin: 23px 0 32px;
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  color: ${({ theme }) => theme.palette.black_100};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

const BodyText = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.textStyleV2.resp.body_md};
  color: ${({ theme }) => theme.palette.black_60};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_sm};
  }
`;

const DescriptionText = styled(BodyText)`
  display: block;
  white-space: pre-wrap;
  word-break: keep-all;
`;

const TextItem = styled.div`
  max-width: 100%;
  margin-right: 6px;
  /* 띄어쓰기 없는 긴 이름(라이브러리 이름 등)이 좁은 화면 밖으로 나가지 않게 한다 */
  overflow-wrap: anywhere;
`;

/* 시안: 버튼 사이 12px. 360 화면에서는 두 개씩 나란히 */
const DeployBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  ${media.mobile} {
    > a {
      flex: 0 1 calc(50% - 6px);
      min-width: 0;
    }
  }
`;

/* 시안: 높이 45px(360 화면 42px), 모서리 12px */
const DeployLinkButton = styled(Button)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  height: 45px;
  padding: 0 18px;
  border-radius: 12px;
  white-space: nowrap;

  background-color: ${theme.palette.black_100};
  color: ${theme.palette.white};
  ${theme.textStyleV2.resp.body_point_md};

  ${media.mobile} {
    width: 100%;
    height: 42px;
    padding: 0 12px;
    ${theme.textStyleV2.resp.body_point_sm};
  }
`;

const OneStoreIcon = styled.span`
  width: 20px;
  height: 20px;
  flex: none;
  background: url('/assets/icons/one_store.ico') center / contain no-repeat;
  filter: grayscale(1) invert(1) brightness(1.3) contrast(20);
`;

export default ProjectContent;
