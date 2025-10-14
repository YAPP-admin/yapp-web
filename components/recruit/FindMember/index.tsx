import { FIND_YAPPU } from 'database/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import media from 'styles/media';

function FindMember(): ReactElement {
  return (
    <SectionTemplate>
      <SectionContent>
        {FIND_YAPPU.map((item, idx) => (
          <TextList key={idx}>
            {item.textParts.map((part, j) =>
              typeof part === 'string' ? (
                part.split('\n').map((line, k) => (
                  <TextPart key={k}>
                    {line}
                    {k !== part.split('\n').length - 1 && <br />}
                  </TextPart>
                ))
              ) : (
                <Image
                  key={j}
                  src={part.img}
                  alt={part.img}
                  width={76}
                  height={54}
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
  background-color: ${({ theme }) => theme.palette.black};
  width: auto;
  padding: 234px 80px;

  ${media.mobile} {
    padding: 204px 12px;
  }
`;

const SectionContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 84px;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
`;

const TextList = styled.li`
  text-align: center;

  & > img {
    margin: 0 10px;
    ${media.mobile} {
      width: 28px;
      height: 22px;
    }
  }
`;
const TextPart = styled.span`
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.subtitle2_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle2_sm};
  }
`;

export default FindMember;
