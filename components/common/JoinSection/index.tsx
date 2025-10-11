import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import SectionTemplate from '../../home/SectionTemplate';
import SectionTitle from '../../home/SectionTitle';
import { useRouter } from 'next/router';

interface JoinSectionProps {
  title?: string;
  subTitle?: string;
  btnText?: string;
}

function JoinSection({
  title,
  subTitle,
  btnText,
}: JoinSectionProps): ReactElement {
  const router = useRouter();

  return (
    <JoinSectionContainer>
      <ImageContainer>
        <InnerContainer>
          <SectionTitle
            title={title || 'FIND YOUR BALANCE'}
            subTitle={
              subTitle || `지원하기 버튼 하나로\nYAPP 27기의 야뿌가 되어보세요.`
            }
            align="center"
          />
          <StyledButton type="button" onClick={() => router.push('/recruit')}>
            {btnText || '27기 지원하기'}
          </StyledButton>
        </InnerContainer>
      </ImageContainer>
    </JoinSectionContainer>
  );
}

const JoinSectionContainer = styled(SectionTemplate)`
  width: auto;
  padding: 140px 16px;
  background-color: ${({ theme }) => theme.palette.white_100};

  ${media.mobile} {
    padding: 100px 16px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  border-radius: 32px;
  background: url('/assets/images/27th/recruit.png') no-repeat center;
  background-size: cover;

  ${media.tablet} {
    height: 750px;
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  top: 148px;
  left: 50%;
  transform: translateX(-50%);

  ${media.mobile} {
    top: 108px;
  }
`;

const StyledButton = styled.button`
  display: flex;
  padding: 7px 18px 8px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.white_100};
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

export default JoinSection;
