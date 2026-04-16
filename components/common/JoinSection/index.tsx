import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import SectionTemplate from '../../home/SectionTemplate';
import SectionTitle from '../SectionTitle';
import Button from '../Button';
import { LINK_BY_STATUS, RecruitStatus } from '../../../constants/status';

interface JoinSectionProps {
  status: RecruitStatus;
  title?: string;
  subTitle?: string;
  btnText?: string;
  url?: string;
  caution?: string;
}

function JoinSection({
  status,
  title,
  subTitle,
  btnText,
  caution,
  url,
}: JoinSectionProps): ReactElement {
  return (
    <JoinSectionContainer>
      <SectionInner>
        <ImageContainer>
          <InnerContainer>
            <SectionTitle
              title={title || 'MOMENT OF DISCOVERY'}
              subTitle={subTitle}
              caution={caution}
              align="center"
            />
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

  ${media.mobile} {
    padding: 100px 16px;
  }
`;

const SectionInner = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  border-radius: 32px;
  background: url('/assets/images/28th/recruit_bg.png') no-repeat center;
  background-size: cover;

  ${media.tablet} {
    height: 750px;
  }

  ${media.mobile} {
    height: 580px;
    background-image: url('/assets/images/28th/recruit_bg_mo.png');
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

export default JoinSection;
