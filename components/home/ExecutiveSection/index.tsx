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
          className="scroll-none"
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
  max-width: 1200px;
  width: 100%;
  /* 가로로 넘치는 목록이 스크롤되도록 */
  min-width: 0;
`;

const TitleBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${media.mobile} {
    padding: 0 20px;
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
    padding: 0 20px;
  }
`;

const MemberScroll = styled(motion.div)`
  margin-top: 48px;
  overflow-x: auto;
`;

const MemberList = styled.ul`
  display: flex;
  gap: 16px;
  width: max-content;
  margin: 0;

  /* 시안: 좁은 화면에서는 가운데 정렬, 넘치면 좌우로 넘긴다 */
  ${media.mobile} {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

const Member = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 196px;

  ${media.tablet} {
    width: 122px;
  }

  ${media.mobile} {
    width: 135px;
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
  text-align: center;

  ${media.mobile} {
    flex-direction: column;
  }
`;

const MemberRole = styled.span`
  color: ${({ theme }) => theme.palette.grey_600};
  ${({ theme }) => theme.textStyleV2.fix.font_16};
`;

const MemberName = styled.span`
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
`;

export default ExecutiveSection;
