import { AnimatedButton, Button } from 'components/common';
import Breakpoints from 'constants/breakpoints';
import Path from 'constants/path';
import Yapp from 'constants/yapp';
import {
  IS_RECRUITING,
  NEXT_GENERATION_RECRUIT_LINK,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import media from 'styles/media';

function RecruitBanner() {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { title, description, buttonName } = BannerInfo;
  const buttonParams = IS_RECRUITING ? { width: 168 } : { width: 190 };
  const router = useRouter();

  return (
    <RecruitBannerContainer>
      <BannerInner>
        <BannerTitle
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
        />
        <BannerDescription
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
        <ButtonBlock
          target="_blank"
          href={
            IS_RECRUITING ? Yapp.YAPP_RECRUIT_ALL : NEXT_GENERATION_RECRUIT_LINK
          }
          rel="noreferrer"
        >
          {IS_RECRUITING ? (
            <ApplyButton
              width={220}
              height={65}
              fontColor="white"
              buttonColor="grey_850"
              borderColor="lightGrey"
            >
              {'모든 공고 보기'}
            </ApplyButton>
          ) : (
            <AnimatedButton
              height={65}
              fontColor="white"
              buttonColor="grey_850"
              className="recruitButton"
              buttonText={buttonName}
              onClick={() => {
                if (!IS_RECRUITING) {
                  window.location.href = NEXT_GENERATION_RECRUIT_LINK;
                  return;
                }

                router.push(Path.Recruit);
              }}
              {...buttonParams}
            />
          )}
        </ButtonBlock>
      </BannerInner>
    </RecruitBannerContainer>
  );
}

const ButtonBlock = styled.a`
  width: fit-content;
  height: fit-content;
  display: block;

  ${media.xSmall} {
    margin: 0 auto;
  }
`;

const ApplyButton = styled(Button)`
  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey_700};
  }
  ${media.mobile} {
    width: 162px;
    height: 56px;
  }
`;

const RecruitBannerContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.blue_200};
`;

const BannerInner = styled.div`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  padding: 120px 0 100px;
  .mobile {
    display: none;
  }
  ${media.tablet} {
    width: auto;
    padding: 164px 80px 100px;
  }
  ${media.mobile} {
    padding: 80px 20px 64px 20px;
    margin-bottom: 56px;
    .desktop {
      display: none;
    }
  }

  ${media.custom(420)} {
    .mobile {
      display: block;
    }
  }
`;

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Head};
  color: ${({ theme }) => theme.palette.grey_1000};
  margin-bottom: 24px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Head};
  }
`;

const BannerDescription = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  color: ${({ theme }) => theme.palette.grey_900};
  margin-bottom: 56px;
  ${media.tablet} {
    margin-bottom: 103px;
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1}
    margin-bottom:32px;
  }
`;

const RecruitButton = styled(AnimatedButton)<{ disabled?: boolean }>`
  ${media.mobile} {
    width: 112px;
    height: 56px;
    ${({ disabled }) => disabled && ` width: 160px;`}
  }
`;

export default RecruitBanner;
