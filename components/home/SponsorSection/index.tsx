import Yapp from 'constants/yapp';
import { SPONSOR_DATA } from 'database/home';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import SectionTemplate from '../SectionTemplate';
import Image from 'next/image';
import SectionTitle from 'components/common/SectionTitle';

function SponsorSection(): ReactElement {
  return (
    <SponsorSectionContainer>
      <SectionTitle
        fontColor="black_100"
        subFontColor="black_60"
        align="left"
        title="YAPP의 후원사"
        subTitle="YAPP과 새로운 가치를 만들어갈 후원 및 협업 문의, 언제든 기다리고 있습니다."
      />
      <SponsorList>
        {SPONSOR_DATA.map(({ image, alt }, index) => (
          <Sponsor key={index}>
            <Image src={image} alt={alt} width={137} height={50} />
          </Sponsor>
        ))}
      </SponsorList>
      <ButtonLinked
        href={`mailto:${Yapp.YAPP_OFFICIAL_EMAIL}`}
        rel="noreferrer"
        target="_blank"
      >
        후원 문의하기
      </ButtonLinked>
    </SponsorSectionContainer>
  );
}

const SponsorSectionContainer = styled(SectionTemplate)`
  width: auto;
  padding: 160px 80px;
  background-color: ${({ theme }) => theme.palette.white_100};

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

const SponsorList = styled.ul`
  display: flex;
  gap: 1.6rem;
  margin: 48px 0;
  width: 100%;

  ${media.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

const Sponsor = styled.li`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.palette.black_5};
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    object-fit: contain;
    width: 200px;
    height: 80px;

    ${media.tablet} {
      width: 100px;
      height: 50px;
    }

    ${media.mobile} {
      width: 180px;
      height: 80px;
    }
  }
`;

const ButtonLinked = styled.a`
  display: flex;
  padding: 7px 18px 8px 18px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.palette.black_100};
  color: ${({ theme }) => theme.palette.white_100};
  border-radius: 99px;
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

export default SponsorSection;
