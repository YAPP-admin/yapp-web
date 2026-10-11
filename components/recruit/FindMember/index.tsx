import { FIND_YAPPU } from 'database/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import media from 'styles/media';
import { motion } from 'framer-motion';

function FindMember(): ReactElement {
  return (
    <SectionTemplate>
      <SectionContent>
        {FIND_YAPPU.map((item, idx) => (
          <TextList key={idx}>
            {item.textParts.map((part, j) =>
              typeof part === 'string' ? (
                part.split('\n').map((line, k) => (
                  <MotionTextPart
                    key={`${j}-${k}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    {line}
                    {k !== part.split('\n').length - 1 && <br />}
                  </MotionTextPart>
                ))
              ) : (
                <YappuIcon
                  key={j}
                  src={part.img}
                  alt={part.img}
                  width={part.width}
                  height={part.height}
                  $mobileWidth={part.mobileWidth}
                  $mobileHeight={part.mobileHeight}
                />
              ),
            )}
          </TextList>
        ))}
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionTemplate = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.grey_25};
  width: 100%;
  /* 시안: 1920 화면에서 섹션 높이 1200px, 내용은 가운데 */
  min-height: 1200px;
  padding: 80px 20px;

  ${media.tablet} {
    min-height: auto;
    /* 시안: 834 화면 858px (목록의 위아래 여백 16px 포함) */
    padding: 105px 20px;
  }

  /* 시안: 360 화면 720px */
  ${media.mobile} {
    padding: 168px 20px;
  }
`;

const SectionContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 84px;
  width: 100%;
  max-width: 1040px;
  justify-content: center;

  ${media.mobile} {
    gap: 48px;
  }
`;

const TextList = styled.li`
  text-align: center;
  width: 100%;
`;

const YappuIcon = styled(Image)<{
  $mobileWidth: number;
  $mobileHeight: number;
}>`
  /* 시안: 글자와 16px 간격, 줄(64px)의 위쪽에 맞춤 */
  margin: 0 16px;
  vertical-align: top;

  ${media.mobile} {
    margin: 0 8px;
  }

  ${media.mobile} {
    width: ${({ $mobileWidth }) => $mobileWidth}px !important;
    height: ${({ $mobileHeight }) => $mobileHeight}px !important;
  }
`;

const MotionTextPart = styled(motion.span)`
  color: ${({ theme }) => theme.palette.black_100};
  font-weight: 600;
  font-size: 40px;
  line-height: 64px;
  letter-spacing: -0.8px;
  word-break: keep-all;

  ${media.mobile} {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.4px;
  }
`;

export default FindMember;
