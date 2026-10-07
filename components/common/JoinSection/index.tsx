import type { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { darkTextOnImage } from 'styles/utils-styles';
import SectionTemplate from '../../home/SectionTemplate';
import Button from '../Button';
import { LINK_BY_STATUS, RecruitStatus } from '../../../constants/status';

interface JoinSectionProps {
  status: RecruitStatus;
  title?: string;
  subTitle?: string;
  btnText?: string;
  url?: string;
  caution?: string;
  /** 제목이 두 줄인 카드(모집 안내의 문의 카드). 시안에서 글자 위치와 크기가 한 줄 제목 카드와 다르다 */
  compactTitle?: boolean;
}

function JoinSection({
  status,
  title,
  subTitle,
  btnText,
  caution,
  url,
  compactTitle = false,
}: JoinSectionProps): ReactElement {
  return (
    <JoinSectionContainer>
      <SectionInner>
        <ImageContainer>
          <InnerContainer $compact={compactTitle}>
            <TextBox $compact={compactTitle}>
              <Title $compact={compactTitle}>
                {title || 'PLAY OUR CHEMISTRY'}
              </Title>
              <SubTitle $compact={compactTitle}>{subTitle}</SubTitle>
              {caution && <Caution $compact={compactTitle}>{caution}</Caution>}
            </TextBox>
            <Button
              type="button"
              variant="black"
              onClick={() => {
                window.open(url || LINK_BY_STATUS[status], '_blank');
              }}
            >
              {btnText}
            </Button>
          </InnerContainer>
        </ImageContainer>
      </SectionInner>
    </JoinSectionContainer>
  );
}

/*
 * 글자가 어두운 색일 때만 적용한다: 두 줄 제목 카드는 모든 폭에서,
 * 한 줄 제목 카드는 1201px 이상에서 어두운 글자를 쓴다(그보다 좁으면 흰 글자).
 * 글자 끝이 상자 밖으로 1px쯤 나가는 글리프가 잘리지 않도록 좌우로 2px씩 칠할 자리를 넓힌다
 * (바깥 여백을 그만큼 줄여 글자 자리는 그대로다).
 */
const darkTextRoom = css`
  ${darkTextOnImage}
  padding-inline: 2px;
  margin-inline: -2px;
`;

const darkTextWhenDark = css<{ $compact: boolean }>`
  ${({ $compact }) =>
    $compact
      ? darkTextRoom
      : css`
          @media (min-width: 1201px) {
            ${darkTextRoom}
          }
        `}
`;

const JoinSectionContainer = styled(SectionTemplate)`
  width: auto;
  padding: 140px 16px;
  background-color: ${({ theme }) => theme.palette.white};

  ${media.tablet} {
    padding: 28px 16px;
  }

  ${media.small} {
    padding: 100px 16px;
  }
`;

const SectionInner = styled.div`
  max-width: 1600px;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* 시안: 1920 화면 1600x920, 834 화면 802x466 (같은 비율) */
  aspect-ratio: 1600 / 920;
  border-radius: 32px;
  /*
   * 그림은 모집 안내 상단 배너용(1600x960)이라 이 카드보다 40px 높다.
   * 시안의 카드는 그 그림의 아래쪽에 맞춰져 있어, 넘치는 만큼 위에서 잘라 낸다.
   */
  background: url('/assets/images/29th/recruit_bg.webp') no-repeat center bottom;
  background-size: cover;

  /*
   * 시안: 360 화면 328x580. 배너용 그림(328x489)을 122.5%로 키워 아래에 맞추고,
   * 왼쪽으로 25px 옮긴 자리다(넘치는 폭의 34.6%).
   */
  ${media.small} {
    aspect-ratio: auto;
    height: 580px;
    background-image: url('/assets/images/29th/recruit_bg_mo.webp');
    background-size: 122.5% auto;
    background-position: 34.6% bottom;
  }
`;

const InnerContainer = styled.div<{ $compact: boolean }>`
  position: absolute;
  /* 시안: 높이 920px 카드에서 위 180px(두 줄 제목은 160px). 카드가 낮아지면 같은 비율로 올라간다 */
  top: ${({ $compact }) => ($compact ? '17.39%' : '19.57%')};
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 0 24px;
  text-align: center;
  /* 시안: 넓은 화면은 어두운 글자, 834px 이하 시안은 흰 글자 */
  color: ${({ theme }) => theme.palette.black_100};

  button {
    padding: 12px 20px;
    ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  }

  ${media.tablet} {
    top: 60px;
    /* 시안: 두 줄 제목 카드는 좁은 화면에서도 어두운 글자를 쓴다 */
    color: ${({ theme, $compact }) =>
      $compact ? theme.palette.black_100 : theme.palette.white_100};
    /* 시안(두 줄 제목): 위 66px, 버튼까지 20px */
    ${({ $compact }) => $compact && 'top: 66px; gap: 20px;'}
  }

  /* 834px 시안보다 좁아지면 카드가 줄어드는 만큼 글자 자리도 같은 비율로 줄인다 */
  ${media.mobile} {
    top: 7.2vw;
    gap: clamp(16px, 3.84vw, 32px);
    ${({ $compact }) =>
      $compact && 'top: 7.9vw; gap: clamp(12px, 2.4vw, 20px);'}
  }

  /* 시안: 360 화면에서는 글자가 카드 좌우 8px 안쪽까지 쓴다 */
  ${media.small} {
    top: 36px;
    gap: 32px;
    padding: 0 8px;
    /* 시안(두 줄 제목): 위 68px, 버튼까지 20px */
    ${({ $compact }) => $compact && 'top: 68px; gap: 20px;'}
  }
`;

const TextBox = styled.div<{ $compact: boolean }>`
  /* 시안: 제목과 안내 문구 사이 8px (두 줄 제목은 넓은 화면에서 12px) */
  --text-gap: ${({ $compact }) => ($compact ? '12px' : '8px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--text-gap);

  ${media.tablet} {
    --text-gap: 8px;
  }
`;

const Title = styled.span<{ $compact: boolean }>`
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  font-size: 2.25rem;
  line-height: 51.2px;
  white-space: pre-line;
  word-break: keep-all;
  ${darkTextWhenDark}

  /* 시안(두 줄 제목): 834 화면에서 28px, 줄 간격 44px */
  ${media.tablet} {
    ${({ $compact }) => $compact && 'font-size: 1.75rem; line-height: 44px;'}
  }

  ${media.mobile} {
    font-size: ${({ $compact }) =>
      $compact ? 'clamp(20px, 3.36vw, 28px)' : 'clamp(22px, 4.32vw, 36px)'};
    line-height: ${({ $compact }) => ($compact ? 1.57 : 1.42)};
  }

  ${media.small} {
    font-size: 2.25rem;
    line-height: 51.2px;
    /* 시안(두 줄 제목): 360 화면에서 줄 간격 36px */
    ${({ theme, $compact }) => $compact && theme.textStyleV2.resp.title1_sm};
    ${({ $compact }) => $compact && 'line-height: 36px;'}
  }
`;

const SubTitle = styled.span<{ $compact: boolean }>`
  ${({ theme }) => theme.textStyleV2.fix.font_24};
  /* 시안: 줄 높이 32px. 글자 줄(36px)에서 위아래로 넘치는 만큼을 --trim으로 당긴다 */
  --trim: 2px;
  line-height: 36px;
  margin: calc(-1 * var(--trim)) 0;
  white-space: pre-line;
  word-break: keep-all;
  color: ${({ theme }) => theme.palette.grey_800};
  ${darkTextWhenDark}
  /* 시안(두 줄 제목): 20px, 줄 높이 32px */
  ${({ $compact }) =>
    $compact && '--trim: 0px; font-size: 1.25rem; line-height: 32px;'}

  ${media.tablet} {
    ${({ $compact }) => !$compact && 'color: inherit;'}
  }

  ${media.mobile} {
    --trim: 0px;
    font-size: ${({ $compact }) =>
      $compact ? 'clamp(14px, 2.4vw, 20px)' : 'clamp(14px, 2.88vw, 24px)'};
    line-height: ${({ $compact }) => ($compact ? 1.6 : 1.5)};
  }

  ${media.small} {
    --trim: 1px;
    ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
    line-height: 34px;
    /* 시안(두 줄 제목): 360 화면에서 16px, 줄 높이 24px */
    ${({ $compact }) =>
      $compact && '--trim: 0px; font-size: 1rem; line-height: 24px;'}
  }
`;

/* 시안: 안내 문구 바로 아래 줄에 더 작은 글자(14px, 360 화면은 12px)로 놓인다. 줄 높이는 안내 문구와 같다 */
const Caution = styled(SubTitle)`
  margin-top: calc(-1 * var(--text-gap) - var(--trim));
  font-size: 0.875rem;

  ${media.mobile} {
    font-size: clamp(11px, 1.68vw, 14px);
    line-height: calc(1.6 * clamp(14px, 2.4vw, 20px));
  }

  ${media.small} {
    font-size: 0.75rem;
    line-height: 24px;
  }
`;

export default JoinSection;
