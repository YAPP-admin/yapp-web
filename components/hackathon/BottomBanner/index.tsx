import { HACKATHON_APPLY_LINK } from 'constants/hackathon';
import Image from 'next/image';
import styled from 'styled-components';
import media from 'styles/media';
import { darkTextOnImage } from 'styles/utils-styles';
import { Br, hackathonFont } from '../shared';

/*
 * 하단 배너 — Figma 8994:6480(1920) · 9002:8063(834) · 9003:10687(360)
 *
 * 배경은 "이미지 모음"의 글자 없는 배너를 통째로 쓴다(1920 9003:11087, 834 9003:11345).
 * 360 시안(9003:11384)은 834 시안을 0.4317배로 줄인 같은 구도라 834 그림을 함께 쓴다.
 * - 1201px 이상: 높이 580, 1920 그림을 cover로 채운다.
 * - 834~1200px: 높이 580, 834 그림을 cover로 채운다.
 * - 833px 이하: 360 시안 비율(360:250.36)을 유지하고 내용은 세로 가운데.
 */

const ASSET_PATH = '/assets/images/hackathon/bottom';

function BottomBanner() {
  return (
    <SectionBlock>
      <Background $variant="desktop">
        <Image
          src={`${ASSET_PATH}/bg_desktop.webp`}
          alt=""
          fill
          sizes="100vw"
          unoptimized
        />
      </Background>
      <Background $variant="tablet">
        <Image
          src={`${ASSET_PATH}/bg_tablet.webp`}
          alt=""
          fill
          sizes="100vw"
          unoptimized
        />
      </Background>
      <Content>
        <Heading>
          <EventInfo>
            <DateText>12월 19일 (토요일) · 아키스케치 성수</DateText>
            <Logos>
              <LogoYapp>
                <Image
                  src={`${ASSET_PATH}/logo_yapp.svg`}
                  alt="YAPP"
                  fill
                  unoptimized
                />
              </LogoYapp>
              <IconX>
                <Image
                  src={`${ASSET_PATH}/icon_x.svg`}
                  alt="×"
                  fill
                  unoptimized
                />
              </IconX>
              <LogoGoorm>
                <Image
                  src={`${ASSET_PATH}/logo_goorm.webp`}
                  alt="goorm"
                  fill
                  unoptimized
                />
              </LogoGoorm>
            </Logos>
          </EventInfo>
          <TextBlock>
            <Title>아이디어를 현실로 만드는 무대</Title>
            <Description>
              하루 안에 AI로 직접 시도하고, <Br on={['mobile']} />
              팀과 함께 결과물을 완성해보세요.
            </Description>
          </TextBlock>
        </Heading>
        <ApplyButton
          href={HACKATHON_APPLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          참가 신청하기
        </ApplyButton>
      </Content>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  position: relative;
  overflow: hidden;
  height: 580px;
  padding: 126.42px 20px 0;
  box-sizing: border-box;
  /* 그림이 뜨기 전 바탕. 시안 프레임의 그라데이션과 같다 */
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.palette.hackathon_banner_sky_top} 20.673%,
    ${({ theme }) => theme.palette.hackathon_banner_sky_bottom}
  );

  ${media.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    aspect-ratio: 360 / 250.36;
    padding: 0 10px;
  }
`;

const Background = styled.div<{ $variant: 'desktop' | 'tablet' }>`
  position: absolute;
  inset: 0;
  display: ${({ $variant }) => ($variant === 'desktop' ? 'block' : 'none')};

  img {
    object-fit: cover;
    object-position: center;
  }

  ${media.tablet} {
    display: ${({ $variant }) => ($variant === 'tablet' ? 'block' : 'none')};
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  text-align: center;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    gap: 12.086px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  ${media.mobile} {
    gap: 8.633px;
  }
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${media.mobile} {
    gap: 6.906px;
  }
`;

const DateText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_700};
  ${hackathonFont(16, 400, '1.5')};
  ${darkTextOnImage};

  ${media.mobile} {
    ${hackathonFont(10, 400, '1.5')};
  }
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 5.333px;

  ${media.mobile} {
    gap: 3.333px;
  }
`;

const LogoBox = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const LogoYapp = styled(LogoBox)`
  width: 97.213px;
  height: 24px;

  ${media.mobile} {
    width: 60.758px;
    height: 15px;
  }
`;

const IconX = styled(LogoBox)`
  width: 32px;
  height: 32px;

  ${media.mobile} {
    width: 20px;
    height: 20px;
  }
`;

const LogoGoorm = styled(LogoBox)`
  width: 102.667px;
  height: 26.667px;

  ${media.mobile} {
    width: 64.167px;
    height: 16.667px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;

  ${media.mobile} {
    gap: 3.453px;
    padding: 0 10.36px;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(36, 700, 51.2, -0.64)};
  ${darkTextOnImage};

  ${media.mobile} {
    ${hackathonFont(16, 700, 22.101, -0.2763)};
  }
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_800};
  ${hackathonFont(24, 600, '1.6', -0.4)};
  ${darkTextOnImage};

  ${media.mobile} {
    ${hackathonFont(11, 600, '1.6', -0.1727)};
  }
`;

const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 109px;
  background-color: ${({ theme }) => theme.palette.hackathon_banner_button};
  color: ${({ theme }) => theme.palette.white};
  ${hackathonFont(24, 600, 28.8, -0.36)};
  white-space: nowrap;
  text-decoration: none;

  ${media.mobile} {
    padding: 8px 12px;
    border-radius: 47.05px;
    ${hackathonFont(11, 600, 12.432, -0.1554)};
  }
`;

export default BottomBanner;
