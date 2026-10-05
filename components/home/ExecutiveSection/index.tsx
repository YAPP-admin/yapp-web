import { type ReactElement, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { EXECUTIVE_GROUPS, EXECUTIVE_SECTION } from 'database/home';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { YappLogo } from 'public/assets/icons';
import UnderlineTabs, {
  getTabPanelProps,
} from 'components/common/UnderlineTabs';
import media from 'styles/media';

function ExecutiveSection(): ReactElement {
  const { title, subTitle } = EXECUTIVE_SECTION;
  const [currentGroup, setCurrentGroup] = useState(EXECUTIVE_GROUPS[0].name);

  const { ref, controls, containerVariants, itemVariants } =
    useScrollAnimation();

  const groupNames = EXECUTIVE_GROUPS.map(({ name }) => name);
  const members =
    EXECUTIVE_GROUPS.find(({ name }) => name === currentGroup)?.members ?? [];

  return (
    <SectionLayout
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <SectionInner>
        <TitleBox variants={itemVariants}>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </TitleBox>

        <TabBox variants={itemVariants}>
          <UnderlineTabs
            tabs={groupNames}
            currentTab={currentGroup}
            onChange={setCurrentGroup}
            idPrefix="executive"
            label={title}
          />
        </TabBox>

        <MemberScroll
          variants={itemVariants}
          {...getTabPanelProps('executive', groupNames, currentGroup)}
        >
          <MemberList>
            {members.map(({ role, name, image }) => (
              <Member key={`${role}-${name}`}>
                <Profile>
                  {image ? (
                    <Image
                      src={image}
                      alt={`${role} ${name}`}
                      fill
                      sizes="196px"
                    />
                  ) : (
                    <YappLogo aria-hidden />
                  )}
                </Profile>
                <MemberLabel>
                  <MemberRole>{role}</MemberRole>
                  <MemberName>{name}</MemberName>
                </MemberLabel>
              </Member>
            ))}
          </MemberList>
        </MemberScroll>
      </SectionInner>
    </SectionLayout>
  );
}

const SectionLayout = styled(motion.section)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.grey_25};
  padding: 160px 80px;

  ${media.mobile} {
    padding: 100px 0;
  }
`;

const SectionInner = styled.div`
  max-width: 1040px;
  width: 100%;
  /* 화면보다 넓은 탭 목록이 이 안에서 좌우로 넘어가도록 */
  min-width: 0;
`;

const TitleBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  /* 시안: 좁은 화면에는 제목이 없다. 화면 읽기 도구에는 남겨 둔다 */
  ${media.mobile} {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  word-break: keep-all;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

const SubTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_50};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  word-break: keep-all;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

const TabBox = styled(motion.div)`
  margin-top: 48px;

  ${media.mobile} {
    margin-top: 0;
    padding: 0 20px;
  }
`;

const MemberScroll = styled(motion.div)`
  margin-top: 48px;
`;

/* 인원이 한 줄에 다 들어가지 않으면 다음 줄로 넘긴다 (가로로 넘기면 가려진 사람이 있는지 알 수 없다) */
const MemberList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 16px;
  margin: 0;

  /* 시안: 좁은 화면에서는 가운데 정렬, 줄 사이 16px */
  ${media.mobile} {
    gap: 16px;
    justify-content: center;
    padding: 0 20px;
  }
`;

const Member = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  /* 시안: 196px. 1040px 폭에 다섯 명이 한 줄로 들어가도록 간격(16px x 4)을 뺀 5등분 */
  width: calc((100% - 64px) / 5);

  ${media.tablet} {
    width: 122px;
  }

  /* 시안: 135px. 320px 화면에서도 두 명씩 놓이게 한다 */
  ${media.mobile} {
    width: min(135px, calc((100% - 16px) / 2));
  }
`;

const Profile = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.2);

  img {
    object-fit: cover;
  }

  /* 프로필 이미지가 없을 때 보이는 로고 */
  svg {
    position: absolute;
    top: 14px;
    left: 16px;

    path {
      fill: ${({ theme }) => theme.palette.white_100};
    }
  }
`;

const MemberLabel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  width: 100%;
  text-align: center;

  /* 카드가 좁아지면 긴 직책이 넘치지 않게 직책과 이름을 두 줄로 쌓는다 */
  ${media.tablet} {
    flex-direction: column;
  }
`;

const MemberRole = styled.span`
  max-width: 100%;
  color: ${({ theme }) => theme.palette.grey_600};
  ${({ theme }) => theme.textStyleV2.fix.font_16};
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

const MemberName = styled.span`
  max-width: 100%;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

export default ExecutiveSection;
