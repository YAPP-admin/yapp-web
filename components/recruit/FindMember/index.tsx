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
  background-color: #f6f6f6;
  width: 100%;
  padding: 80px 0;
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
  margin: 0 8px;
  vertical-align: middle;

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

  ${media.mobile} {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.4px;
  }
`;

export default FindMember;
