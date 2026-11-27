import {
  HACKATHON_SECTION_ID,
  HACKATHON_VENUE_LINK,
} from 'constants/hackathon';
import Image from 'next/image';
import styled from 'styled-components';
import media from 'styles/media';
import { darkTextOnImage } from 'styles/utils-styles';
import { Br, hackathonFont, SectionInner, sectionGutter } from '../shared';

/* 01_행사소개 — Figma 8940:11317(1920) · 8995:10107(834) · 8981:13581(360) */

const ASSET_PATH = '/assets/images/hackathon/intro';

/*
 * 별·별똥별 배경은 시안 프레임 크기(1920×1082, 834×1111, 360×796) 그대로 한 장씩 만들었다.
 * 섹션 가운데에 맞춰 깔아서, 본문이 가운데 정렬되는 넓은 화면에서도 시안과 같은 자리에 온다.
 */
const STARS = {
  desktop: `${ASSET_PATH}/stars_1920.svg`,
  tablet: `${ASSET_PATH}/stars_834.svg`,
  mobile: `${ASSET_PATH}/stars_360.svg`,
};

/*
 * 행사 카드 배경 그림(눈 덮인 마을). 시안 "이미지 모음"의 banner 1040×292(9003:11434),
 * 320×292(9003:11550). 674×292(9003:11489)는 1040 그림의 왼쪽을 자른 것과 같아서 1040 한 장을
 * 왼쪽 기준으로 깐다. 카드 바탕 흰색이 그림에 들어 있어 강제 다크에서도 카드가 밝게 남는다.
 */
const CARD_ART = {
  wide: `${ASSET_PATH}/card_art.webp`,
  narrow: `${ASSET_PATH}/card_art_mobile.webp`,
};

function Intro() {
  return (
    <SectionBlock id={HACKATHON_SECTION_ID.intro}>
      <SectionInner>
        <Content>
          <Heading>
            AI와 함께 아이디어를 <Br on={['desktop', 'tablet']} />
            실제 <Br on={['mobile']} />웹 서비스로 구현하는 특별한 하루!
          </Heading>
          <EventCard>
            <CardBody>
              <CardHeader>
                <Brand>
                  <Label>AI 해커톤</Label>
                  <Logos>
                    <YappLogo>
                      <Image
                        src={`${ASSET_PATH}/logo_yapp.svg`}
                        alt="YAPP"
                        fill
                        unoptimized
                      />
                    </YappLogo>
                    <CrossIcon>
                      <Image
                        src={`${ASSET_PATH}/icon_x.svg`}
                        alt=""
                        fill
                        unoptimized
                      />
                    </CrossIcon>
                    <GoormLogo>
                      <Image
                        src={`${ASSET_PATH}/logo_goorm.webp`}
                        alt="goorm"
                        fill
                        unoptimized
                      />
                      <Hat aria-hidden>
                        <HatDesktop
                          src={`${ASSET_PATH}/icon_hat.svg`}
                          alt=""
                          width={62}
                          height={50}
                          unoptimized
                        />
                        <HatMobile
                          src={`${ASSET_PATH}/icon_hat_mobile.svg`}
                          alt=""
                          width={51}
                          height={40}
                          unoptimized
                        />
                      </Hat>
                    </GoormLogo>
                  </Logos>
                </Brand>
                <Tagline>
                  팀이 함께 AI를 활용해 기획부터 <Br on={['mobile']} />
                  개발·배포까지 도전하는 원데이 해커톤
                </Tagline>
              </CardHeader>
              <InfoList>
                <InfoRow>
                  <InfoLabel>행사 일시</InfoLabel>
                  <InfoValue>{'2026.12.19 (토)  09:00 ~ 21:00'}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>행사 장소</InfoLabel>
                  <InfoValue>
                    <VenueLink
                      href={HACKATHON_VENUE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      아키스케치 성수 3층
                    </VenueLink>
                  </InfoValue>
                </InfoRow>
              </InfoList>
            </CardBody>
          </EventCard>
          <Description>
            YAPP X goorm은 하루 동안 진행하는 해커톤으로, 팀을 구성해 함께 AI로
            직접 시도하고 결과물을 완성합니다. <Br on={['desktop']} />
            짧은 시간 안에 머릿속에만 있던 아이디어를 실제 서비스로 구현할 수
            있는 얍커톤으로 여러분을 초대합니다.
          </Description>
        </Content>
      </SectionInner>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 270px;
  padding-bottom: 270px;
  background-color: ${({ theme }) => theme.palette.hackathon_night};
  background-image: url('${STARS.desktop}');
  background-repeat: no-repeat;
  background-position: center center;
  ${sectionGutter};

  ${media.tablet} {
    background-image: url('${STARS.tablet}');
  }

  ${media.mobile} {
    padding-top: 120px;
    padding-bottom: 120px;
    background-image: url('${STARS.mobile}');
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  ${media.mobile} {
    gap: 32px;
  }
`;

const Heading = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.white};
  ${hackathonFont(40, 600, '1.5', -0.4)};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    ${hackathonFont(22, 700, '1.6', -0.48)};
  }
`;

/* banner — 8965:4662(1920) · 8995:10109(834) · 8981:15206(360) */
const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 292px;
  padding: 20px 40px 24px;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.white};
  background-image: url('${CARD_ART.wide}');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 1040px 292px;
  box-shadow: inset 0 4px 16px 0
    ${({ theme }) => theme.palette.hackathon_intro_card_shadow};

  ${media.mobile} {
    padding: 20px;
  }

  /*
   * 360 시안 그림은 폭이 320px뿐이라 카드가 넓어지면 오른쪽이 빈다.
   * 480px 이하에서만 카드에 맞춰 늘려 쓰고, 그 위의 모바일 폭에서는 1040 그림을 왼쪽 기준으로 쓴다.
   */
  ${media.small} {
    background-image: url('${CARD_ART.narrow}');
    background-position: left bottom;
    background-size: cover;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.chemistry_29th_blue};
  ${hackathonFont(20, 600, '1.6', -0.4)};

  ${media.mobile} {
    ${hackathonFont(16, 600, '1.6', -0.32)};
  }
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.mobile} {
    gap: 5.497px;
  }
`;

const LogoBox = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const YappLogo = styled(LogoBox)`
  width: 145.82px;
  height: 36px;

  ${media.mobile} {
    width: 100.199px;
    height: 24.738px;
  }
`;

const CrossIcon = styled(LogoBox)`
  width: 48px;
  height: 48px;

  ${media.mobile} {
    width: 32.983px;
    height: 32.983px;
  }
`;

const GoormLogo = styled(LogoBox)`
  width: 154px;
  height: 40px;

  ${media.mobile} {
    width: 105.822px;
    height: 27.486px;
  }
`;

/* 산타 모자 — 8965:4713(1920·834) · 8981:15262(360). 위치는 goorm 로고 기준(그림자 포함 영역) */
const Hat = styled.span`
  position: absolute;
  left: 134.491px;
  top: -40.166px;
  display: block;
  line-height: 0;
  pointer-events: none;

  ${media.mobile} {
    left: 88.672px;
    top: -33.19px;
  }
`;

const HatDesktop = styled(Image)`
  ${media.mobile} {
    display: none;
  }
`;

const HatMobile = styled(Image)`
  display: none;

  ${media.mobile} {
    display: block;
  }
`;

const Tagline = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(20, 600, '1.6', -0.4)};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */
  ${darkTextOnImage};

  ${media.mobile} {
    ${hackathonFont(16, 600, '1.6', -0.32)};
  }
`;

const InfoList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  ${hackathonFont(16, 500, '1.6', -0.32)};

  ${media.mobile} {
    ${hackathonFont(15, 500, '1.6', -0.3)};
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  ${media.mobile} {
    gap: 8px;
  }
`;

const InfoLabel = styled.dt`
  flex-shrink: 0;
  width: 60px;
  color: ${({ theme }) => theme.palette.grey_600};
  font-weight: 500;
  ${darkTextOnImage};
`;

/* 시안 값 "2026.12.19 (토)  09:00"의 두 칸 띄어쓰기를 살린다 */
const InfoValue = styled.dd`
  margin: 0;
  min-width: 0;
  color: ${({ theme }) => theme.palette.grey_800};
  font-weight: 600;
  white-space: pre-wrap;
  ${darkTextOnImage};
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_100};
  ${hackathonFont(18, 400, '1.6', -0.4)};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    color: ${({ theme }) => theme.palette.grey_300};
    ${hackathonFont(16, 400, '1.6', -0.4)};
  }
`;

/* 장소: 누르면 네이버 지도를 새 탭으로 연다. 모양은 시안 글자 그대로, 마우스를 올리면 밑줄 */
const VenueLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

export default Intro;
