import Image from 'next/image';
import styled from 'styled-components';
import media from 'styles/media';
import {
  hackathonFont,
  SectionInner,
  SectionTitle,
  sectionGutter,
} from '../shared';

/* 07_심사위원 — Figma 8995:10383(1920) · 8995:12132(834) · 8995:6802(360) */

interface Career {
  /** '현 ', '전' — 시안 글자 그대로(현 뒤에 공백이 있다) */
  label: string;
  text: string;
}

interface Judge {
  name: string;
  photo: string;
  careers: Career[];
  /** 경력 아래 줄 */
  extra: string;
}

const IMAGE_PATH = '/assets/images/hackathon/judges';

// 사진은 Figma "이미지 모음" 9003:11702 · 9003:11704(240×240)과 같은 영역을 2배로 잘랐다
const JUDGES: Judge[] = [
  {
    name: '조현영 (ZeroCho)',
    photo: `${IMAGE_PATH}/judge_zerocho.webp`,
    careers: [{ label: '현 ', text: '카카오모빌리티 개발파트장' }],
    extra: "개발 유튜브 '제로초TV' 운영",
  },
  {
    name: '이동욱 (향로)',
    photo: `${IMAGE_PATH}/judge_hyangro.webp`,
    careers: [
      { label: '현 ', text: '인프랩 CTO' },
      { label: '전', text: '우아한형제들 리드 엔지니어' },
    ],
    extra: '개발 유튜브 ‘개발바닥’ 운영',
  },
];

function Judges() {
  return (
    <SectionBlock id="judges">
      <SectionInner>
        <Content>
          <SectionTitle
            title="심사위원"
            description="공정하고 객관적인 심사를 위해 각 분야의 전문가를 심사위원으로 초청했습니다."
          />
          <CardList>
            {JUDGES.map(({ name, photo, careers, extra }) => (
              <Card key={name}>
                <Photo>
                  <Image
                    src={photo}
                    alt={`심사위원 ${name}`}
                    fill
                    sizes="(max-width: 833px) 90px, 240px"
                  />
                </Photo>
                <Info>
                  <Name>{name}</Name>
                  <Lines $multi={careers.length > 1}>
                    <Careers>
                      {careers.map(({ label, text }) => (
                        <CareerItem key={text}>
                          <CareerLabel>{label}</CareerLabel>
                          <Divider
                            src={`${IMAGE_PATH}/divider.svg`}
                            alt=""
                            width={1}
                            height={18}
                            unoptimized
                          />
                          <CareerText>{text}</CareerText>
                        </CareerItem>
                      ))}
                    </Careers>
                    <CareerText>{extra}</CareerText>
                  </Lines>
                </Info>
              </Card>
            ))}
          </CardList>
        </Content>
      </SectionInner>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  background-color: ${({ theme }) => theme.palette.grey_100};
  padding-top: 240px;
  padding-bottom: 100px;
  ${sectionGutter};

  ${media.tablet} {
    padding-top: 160px;
    padding-bottom: 80px;
  }

  ${media.mobile} {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.mobile} {
    gap: 32px;
  }
`;

const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }

  ${media.mobile} {
    gap: 16px;
  }
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 52px 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.white};
  box-sizing: border-box;
  overflow: hidden;

  ${media.mobile} {
    flex-direction: row;
    gap: 16px;
    min-height: 153px;
    padding: 20px;
    border-radius: 16px;
  }
`;

const Photo = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${media.mobile} {
    width: 90px;
    height: 90px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    flex: 1 0 0;
    min-width: 1px;
    align-items: flex-start;
    gap: 8px;
    text-align: left;
  }
`;

const Name = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(24, 700, 32, -0.4)};

  ${media.mobile} {
    ${hackathonFont(18, 700, 32, -0.4)};
  }
`;

/** 360 시안: 경력이 한 줄이면 아래 줄과 4, 두 줄이면 8 */
const Lines = styled.div<{ $multi: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${media.mobile} {
    align-items: flex-start;
    gap: ${({ $multi }) => ($multi ? 8 : 4)}px;
  }
`;

const Careers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 16px;

  ${media.mobile} {
    flex-direction: column;
    gap: 2px;
  }
`;

const CareerItem = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
`;

const CareerLabel = styled.span`
  flex-shrink: 0;
  white-space: pre;
  color: ${({ theme }) => theme.palette.grey_500};
  ${hackathonFont(18, 600, '1.5', -0.4)};

  ${media.mobile} {
    ${hackathonFont(14, 600, '1.5', -0.4)};
  }
`;

const Divider = styled(Image)`
  flex-shrink: 0;
`;

const CareerText = styled.span`
  margin: 0;
  min-width: 0;
  color: ${({ theme }) => theme.palette.grey_850};
  ${hackathonFont(18, 600, '1.5', -0.4)};

  ${media.mobile} {
    ${hackathonFont(14, 600, '1.5', -0.4)};
  }
`;

export default Judges;
