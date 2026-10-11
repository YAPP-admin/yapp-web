import { ReactElement } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PaletteKeyTypes } from 'styles/theme';
import { CircleArrow } from 'public/assets/icons';

interface CardProps {
  name: string;
  description: string;
  backInfo: string[];
  backgroundColor: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
  /** 카드 아래 문구. 모집 중에는 '지원하기', 그 외에는 '자세히 보기' */
  actionLabel: string;
  isFlipped: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function RecruitCard({
  name,
  description,
  backInfo,
  backgroundColor,
  fontColor,
  actionLabel,
  isFlipped,
  onHoverStart,
  onHoverEnd,
}: CardProps): ReactElement {
  /* 시안: 밝은 카드는 본문이 남색이어도 '자세히 보기'는 검정에 가까운 글자색을 쓴다 */
  const actionColor: PaletteKeyTypes =
    fontColor === 'chemistry_29th_text' ? 'black_100' : fontColor;

  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <CardInner $isFlipped={isFlipped}>
        <CardFront $backgroundColor={backgroundColor} $fontColor={fontColor}>
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <Action $iconColor={actionColor} $arrowColor={backgroundColor}>
            {actionLabel}
            <CircleArrow />
          </Action>
        </CardFront>
        <CardBack $backgroundColor="grey_800" $fontColor="white_100">
          <div>
            <h2>{name}</h2>
            {backInfo.map((info) => (
              <p key={info}>{info}</p>
            ))}
          </div>
          <Action $iconColor="white_100" $arrowColor="grey_800">
            {actionLabel}
            <CircleArrow />
          </Action>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
}

export default RecruitCard;

/* 시안: 카드 320x368, 모서리 16px, 안쪽 여백 위아래 36px·좌우 32px */
const CardContainer = styled(motion.div)`
  perspective: 1000px;
  width: 320px;
  max-width: 100%;
  height: 368px;
  cursor: pointer;
`;

const CardInner = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform: ${({ $isFlipped }) =>
    $isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div<{
  $backgroundColor: PaletteKeyTypes;
  $fontColor: PaletteKeyTypes;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 36px 32px;
  box-sizing: border-box;
  color: ${({ theme, $fontColor }) => theme.palette[$fontColor]};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.palette[$backgroundColor]};

  h2 {
    margin: 0;
    ${({ theme }) => theme.textStyleV2.fix.font_24};
    font-weight: 700;
  }

  p {
    margin: 8px 0 0;
    ${({ theme }) => theme.textStyleV2.fix.font_15};
    font-weight: 600;
    word-break: keep-all;
  }
`;

const CardFront = styled(CardFace)``;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);

  p + p {
    margin-top: 16px;
  }
`;

const Action = styled.span<{
  $iconColor: PaletteKeyTypes;
  $arrowColor: PaletteKeyTypes;
}>`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme, $iconColor }) => theme.palette[$iconColor]};
  ${({ theme }) => theme.textStyleV2.fix.font_20};

  /* 원은 글자색, 안쪽 화살표는 카드 배경색 */
  & > svg > g > path:first-child {
    fill: ${({ theme, $iconColor }) => theme.palette[$iconColor]};
  }

  & > svg > g > path:nth-child(2) {
    stroke: ${({ theme, $arrowColor }) => theme.palette[$arrowColor]};
  }
`;
