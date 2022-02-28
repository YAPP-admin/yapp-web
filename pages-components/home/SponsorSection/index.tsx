import type { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Button } from 'components';
import { SectionTitle } from 'pages-components/home';
import SectionTemplate from '../SectionTemplate';
import media from 'styles/media';
import { SPONSOR_DATA } from 'database/home';

function SponsorSection(): ReactElement {
  return (
    <SponsorSectionContainer>
      <SectionTitle className="title-text">YAPP 후원사</SectionTitle>
      <span className="detail-text">
        운영을 위한 다양한 후원사를 기다리고 있습니다.
      </span>
      <SponsorList>
        {SPONSOR_DATA.map(({ image }, index) => (
          <Sponsor key={index}>
            <Image src={image} layout="fill" />
          </Sponsor>
        ))}
      </SponsorList>
      <Button
        width={180}
        height={78}
        fontColor="white"
        buttonColor="orange_400"
      >
        후원 문의
      </Button>
    </SponsorSectionContainer>
  );
}

const SponsorSectionContainer = styled(SectionTemplate)`
  padding: 200px 0;
  background-color: ${({ theme }) => theme.palette.grey_850};

  .title-text {
    color: ${({ theme }) => theme.palette.white};
  }
  .detail-text {
    margin-top: 24px;
    color: ${({ theme }) => theme.palette.grey_400};
    ${({ theme }) => theme.textStyle.web.Body_1};
  }

  // mobile
  ${media.mobile} {
    .title-text {
      ${({ theme }) => theme.textStyle.mobile.Title_2};
    }
    .detail-text {
      ${({ theme }) => theme.textStyle.mobile.Body_1}
    }
  }
`;

const SponsorList = styled.ul`
  width: 100%;
  margin: 64px 0;
  text-align: center;
`;

const Sponsor = styled.li`
  position: relative;
  display: inline-block;
  width: 280px;
  height: 80px;
`;

export default SponsorSection;
