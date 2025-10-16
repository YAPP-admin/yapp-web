import styled from 'styled-components';
import AnimatedBox from '../AnimatedBox';
import media from 'styles/media';
import Image from 'next/image';
import { PaletteKeyTypes } from 'styles/theme';

interface CardProps {
  title: string;
  content: string;
  icon?: string;
  color?: PaletteKeyTypes;
  fontColor?: PaletteKeyTypes;
}

function CircusCard(
  { title, content, icon, color, fontColor }: CardProps,
  index: number,
) {
  return (
    <CardLayout
      key={index}
      color={color as PaletteKeyTypes}
      fontColor={fontColor as PaletteKeyTypes}
    >
      <CardInnerBox>
        <CardSubTitle>{title}</CardSubTitle>
        <CardTitle>{content}</CardTitle>
      </CardInnerBox>
      {icon && <Image src={icon} alt={title} width={70} height={70} />}
    </CardLayout>
  );
}

export default CircusCard;

const CardLayout = styled(AnimatedBox)`
  ${media.mobile} {
    max-height: 156px;
  }
`;

const CardInnerBox = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardSubTitle = styled.span`
  margin: 0;
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

const CardTitle = styled.h1`
  ${({ theme }) => theme.textStyleV2.resp.title2_md};
  margin-top: 8px;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title2_sm};
  }
`;
