import { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme, { PaletteKeyTypes } from 'styles/theme';
import { CircleArrow } from 'public/assets/icons';

interface CardProps {
  name: string;
  description: string;
  backInfo: string[];
  backgroundColor: PaletteKeyTypes;
  isFlipped: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function RecruitCard({
  name,
  description,
  backInfo,
  backgroundColor,
  isFlipped,
  onHoverStart,
  onHoverEnd,
}: CardProps): ReactElement {
  return (
    <CardContainer
      whileHover={{ scale: 1.1 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <CardInner isFlipped={isFlipped}>
        <CardFront backgroundColor={backgroundColor}>
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <ApplyBtn
            color={backgroundColor === 'white' ? 'black_100' : 'white_100'}
            back={false}
          >
            <p>지원하기</p>
            <CircleArrow />
          </ApplyBtn>
        </CardFront>
        <CardBack>
          {backInfo.map((info, idx) => (
            <p key={idx}>{info}</p>
          ))}
          <ApplyBtn back>
            <p>지원하기</p>
            <CircleArrow />
          </ApplyBtn>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
}

export default RecruitCard;

const CardContainer = styled(motion.li)`
  perspective: 1000px;
  width: 274px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardInner = styled(motion.div)<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div<{ backgroundColor?: PaletteKeyTypes }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 28px 32px;
  box-sizing: border-box;
  color: ${({ backgroundColor }) =>
    backgroundColor === 'white'
      ? theme.palette.black_100
      : theme.palette.white_100};
  background-color: ${({ backgroundColor, theme }) =>
    theme.palette[backgroundColor || 'black_100']};
`;

const CardFront = styled(CardFace)`
  h2 {
    margin: 0;
    ${({ theme }) => theme.textStyleV2.fix.font_24};
  }

  p {
    margin-top: 8px;
    ${({ theme }) => theme.textStyleV2.fix.font_15};
  }
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  font-size: 14px;
  line-height: 1.4;
  background-color: #4a4a4a;
  color: ${theme.palette.white_100};
`;

const ApplyBtn = styled.button<{ back: boolean; color?: PaletteKeyTypes }>`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 6px;
  color: ${({ back, color }) =>
    back || !color ? theme.palette.white_100 : theme.palette[color]};
  & p {
    margin: 0;
    ${({ theme }) => theme.textStyleV2.fix.font_20};
  }

  & > svg > g > path {
    fill: ${({ back }) => back && theme.palette.white_100};
  }

  & > svg > g > path:nth-child(2) {
    stroke: ${({ back }) => back && '#4a4a4a'};
  }
`;
