import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
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
  /** 제목이 길 때 좁은 화면에서 제목 글자를 한 단계 줄인다 */
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
          <InnerContainer>
            <TextBox>
              <Title $compact={compactTitle}>
                {title || 'PLAY OUR CHEMISTRY'}
              </Title>
              <SubTitle>{subTitle}</SubTitle>
              {caution && <Caution>{caution}</Caution>}
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
  background: url('/assets/images/29th/recruit_bg.webp') no-repeat center;
  background-size: cover;

  /* 시안: 360 화면 328x580 */
  ${media.small} {
    aspect-ratio: auto;
    height: 580px;
    background-image: url('/assets/images/29th/recruit_bg_mo.webp');
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 180px;
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
    color: ${({ theme }) => theme.palette.white_100};
  }

  ${media.small} {
    top: 36px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Title = styled.span<{ $compact: boolean }>`
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  font-size: 2.25rem;
  line-height: 51.2px;
  white-space: pre-line;
  word-break: keep-all;

  ${media.small} {
    ${({ theme, $compact }) => $compact && theme.textStyleV2.resp.title1_sm};
  }
`;

const SubTitle = styled.span`
  ${({ theme }) => theme.textStyleV2.fix.font_24};
  /* 시안: 줄 높이 32px, 줄 간격 4px */
  line-height: 36px;
  margin: -2px 0;
  white-space: pre-line;
  word-break: keep-all;
  color: ${({ theme }) => theme.palette.grey_800};

  ${media.tablet} {
    color: inherit;
  }

  ${media.small} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
    line-height: 34px;
    margin: -1px 0;
  }
`;

/* 시안: 안내 문구와 같은 글자 크기로 바로 아래 줄에 놓인다 */
const Caution = styled(SubTitle)`
  margin-top: -8px;
`;

export default JoinSection;
