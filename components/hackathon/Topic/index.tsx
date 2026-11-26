import Image from 'next/image';
import styled from 'styled-components';
import media from 'styles/media';
import {
  hackathonFont,
  SectionInner,
  SectionTitle,
  sectionGutter,
} from '../shared';

/* 03_주제 — Figma 8950:13682(1920) · 8995:11583(834) · 8981:15584(360) */

const ASSET_PATH = '/assets/images/hackathon/topic';

const KEYWORDS = ['CHRISTMAS', '?'];

function Topic() {
  return (
    <SectionBlock id="topic">
      <SectionInner>
        <Content>
          <SectionTitle
            title="해커톤 주제"
            description="사전 공개 키워드로 아이디어를 미리 구상해 보세요."
          />
          <Body>
            {/* Keywords 8950:13688 */}
            <Keywords>
              {KEYWORDS.map((keyword) => (
                <Keyword key={keyword}>
                  <Hash aria-hidden>#</Hash>
                  <span>{keyword}</span>
                </Keyword>
              ))}
            </Keywords>
            <BoxBlock>
              {/* 주제 8950:13696 */}
              <TopicBox>
                <CardRow>
                  {/* CHRISTMAS 카드 8950:13698 */}
                  <KeywordCard>
                    {/* 산타 모자 8950:13699: 28px 칸 밖으로 그림자 영역이 번진다 */}
                    <HatSlot>
                      <HatImage>
                        <Image
                          src={`${ASSET_PATH}/santa_hat.svg`}
                          alt=""
                          width={61.035}
                          height={46.3253}
                          unoptimized
                        />
                      </HatImage>
                    </HatSlot>
                    <ChristmasText>CHRISTMAS</ChristmasText>
                  </KeywordCard>
                  {/* lucide/plus 8950:13704 */}
                  <PlusIcon>
                    <Image
                      src={`${ASSET_PATH}/plus.svg`}
                      alt="더하기"
                      width={40}
                      height={40}
                      unoptimized
                    />
                  </PlusIcon>
                  {/* 미공개 키워드 카드 8950:13706 */}
                  <MysteryCard>
                    <GiftSlot>
                      <GiftImage>
                        <Image
                          src={`${ASSET_PATH}/gift.svg`}
                          alt=""
                          width={52.5}
                          height={55.4179}
                          unoptimized
                        />
                      </GiftImage>
                      <GiftQuestion>?</GiftQuestion>
                    </GiftSlot>
                  </MysteryCard>
                </CardRow>
              </TopicBox>
              <Note>추가 키워드는 해커톤 당일 공개됩니다.</Note>
            </BoxBlock>
          </Body>
        </Content>
      </SectionInner>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  background-color: ${({ theme }) => theme.palette.white};
  padding-top: 240px;
  padding-bottom: 240px;
  ${sectionGutter};

  ${media.tablet} {
    padding-top: 160px;
    padding-bottom: 160px;
  }

  ${media.mobile} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.mobile} {
    gap: 32px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.mobile} {
    gap: 20px;
  }
`;

const Keywords = styled.p`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  color: ${({ theme }) => theme.palette.hackathon_topic_keyword};
  ${hackathonFont(31, 700, 48)};
  white-space: nowrap;
`;

const Keyword = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Hash = styled.span`
  color: ${({ theme }) => theme.palette.grey_500};
`;

const BoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.mobile} {
    gap: 20px;
  }
`;

const TopicBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 110px 0;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.hackathon_point_blue};
  overflow: hidden;

  ${media.mobile} {
    padding: 50px 0;
    border-radius: 16px;
  }
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  ${media.tablet} {
    gap: 16px;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 24px;
  }
`;

const TopicCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 20px 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: inset 0 4px 5.5px 0
    ${({ theme }) => theme.palette.hackathon_topic_card_shadow};
  box-sizing: border-box;
`;

const KeywordCard = styled(TopicCard)`
  gap: 8px;
`;

const MysteryCard = styled(TopicCard)`
  width: 267px;
  height: 124px;
`;

const HatSlot = styled.div`
  position: relative;
  width: 42.71px;
  height: 28px;
`;

/* 시안: inset -32.72% -21.45% → 모자 그림자까지 포함한 61.035×46.325 */
const HatImage = styled.div`
  position: absolute;
  top: -9.16px;
  left: -9.16px;
  display: flex;
`;

const ChristmasText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.hackathon_topic_christmas};
  ${hackathonFont(32, 700, 48)};
  white-space: nowrap;
`;

const PlusIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
`;

/* lucide/gift 8950:13707 */
const GiftSlot = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  overflow: hidden;
`;

/* 시안: inset 8.33% 12.5% 12.5% 12.5% */
const GiftImage = styled.div`
  position: absolute;
  top: 5.833px;
  left: 8.75px;
  display: flex;
`;

/* 8950:13709: left calc(50% - 11.44px), top calc(50% - 37.69px) */
const GiftQuestion = styled.span`
  position: absolute;
  top: calc(50% - 37.69px);
  left: calc(50% - 11.44px);
  color: ${({ theme }) => theme.palette.chemistry_29th_orange};
  ${hackathonFont(43.077, 700, 84)};
  white-space: nowrap;
`;

const Note = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_50};
  ${hackathonFont(20, 600, 32, -0.4)};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    color: ${({ theme }) => theme.palette.black_60};
    ${hackathonFont(16, 600, '1.5', -0.32)};
  }
`;

export default Topic;
