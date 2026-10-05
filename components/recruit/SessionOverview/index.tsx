import { SESSION_CURRICULUM } from 'database/recruit';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import media from 'styles/media';
import SectionTitle from 'components/common/SectionTitle';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { motion } from 'framer-motion';

function SessionOverview(): ReactElement {
  const { title, sessions, subtitle } = SESSION_CURRICULUM;

  const { ref, controls, containerVariants, itemVariants } =
    useScrollAnimation();

  return (
    <SectionLayout
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <SectionInner>
        <motion.div variants={itemVariants}>
          <SectionTitle
            title={title}
            subTitle={subtitle}
            fontColor="black_100"
            subFontColor="black_50"
            align="flex-start"
          />
        </motion.div>
        <SessionList variants={containerVariants}>
          {sessions.map(({ name, date, description, logo }) => (
            <Session key={name} variants={itemVariants}>
              <SessionBody>
                <SessionHead>
                  <SessionName>
                    {name}
                    {logo && (
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={63}
                        height={20}
                      />
                    )}
                  </SessionName>
                  <SessionDate>{date}</SessionDate>
                </SessionHead>
                <SessionDescription>{description}</SessionDescription>
              </SessionBody>
            </Session>
          ))}
        </SessionList>
      </SectionInner>
    </SectionLayout>
  );
}

const SectionLayout = styled(motion.section)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.white};
  padding: 160px 80px;

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

const SectionInner = styled.div`
  max-width: 1040px;
  width: 100%;
`;

const SessionList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin: 48px 0 0;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

/* 시안: 카드 508x156, 위쪽 회색 띠 28px */
const Session = styled(motion.li)`
  display: flex;
  flex-direction: column;
  min-height: 156px;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.chemistry_29th_grey};

  &::before {
    content: '';
    flex-shrink: 0;
    height: 28px;
    background-color: ${({ theme }) => theme.palette.grey_500};
  }
`;

const SessionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
`;

const SessionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const SessionName = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
`;

const SessionDate = styled.span`
  flex-shrink: 0;
  padding: 0 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.chemistry_29th_date_bg};
  color: ${({ theme }) => theme.palette.chemistry_29th_date};
  ${({ theme }) => theme.textStyleV2.fix.font_16};
  font-weight: 600;
`;

const SessionDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_700};
  ${({ theme }) => theme.textStyleV2.fix.font_16};
  white-space: pre-line;
  word-break: keep-all;

  /* 좁은 화면에서는 정해진 줄바꿈 대신 폭에 맞춰 흐르게 한다 */
  ${media.tablet} {
    white-space: normal;
  }
`;

export default SessionOverview;
