import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { Button, SectionTitle } from 'components';

function AnimatedTextSection(): ReactElement {
  return (
    <SponsorContainer>
      <SectionTitle className="sponsor-text">YAPP 후원사</SectionTitle>
      <span className="detail-text">
        YAPP은 운영을 위한 다양한 후원사를 기다리고 있습니다.
      </span>
      <Button
        width={180}
        height={78}
        fontColor="white"
        buttonColor="orange_400"
      >
        후원 문의
      </Button>
    </SponsorContainer>
  );
}

const ContainerLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 200px 0;
`;

const SponsorContainer = styled(ContainerLayout)`
  background-color: ${({ theme }) => theme.palette.grey_850};

  .detail-text {
    ${({ theme }) => theme.textStyle.web.Body_1};
  }
  ${media.mobile} {
    .detail-text {
      ${({ theme }) => theme.textStyle.mobile.Body_1}
    }
  }
`;

export default AnimatedTextSection;
