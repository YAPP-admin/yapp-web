import { type ReactElement, useEffect, useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Banner from 'components/common/Banner';
import UnderlineTabs, {
  getTabPanelProps,
} from 'components/common/UnderlineTabs';
import JobDetail from 'components/recruit/JobDetail';
import Path from 'constants/path';
import { RECRUITING_STATUS, RecruitStatus } from 'constants/status';
import {
  RECRUIT_JOBS,
  RECRUIT_JOB_BANNER,
  type RecruitJob,
} from 'database/recruitJobs';
import media from 'styles/media';

const TAB_ID_PREFIX = 'recruit-job';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: RECRUIT_JOBS.map(({ slug }) => ({ params: { job: slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const job = RECRUIT_JOBS.find(({ slug }) => slug === params?.job);

  if (!job) return { notFound: true };

  return {
    props: {
      job,
      seo: {
        title: `${job.name} 인재상 & JD`,
        description: job.description.replace(/\n/g, ' '),
        path: `${Path.Recruit}/${job.slug}`,
        /* 모집 전에만 공개하는 페이지라 검색 결과에는 올리지 않는다 */
        noindex: true,
      },
    },
  };
};

interface RecruitJobPageProps {
  job: RecruitJob;
}

function RecruitJobPage({ job }: RecruitJobPageProps): ReactElement {
  const router = useRouter();
  const jobNames = RECRUIT_JOBS.map(({ name }) => name);

  const [isOpen, setIsOpen] = useState(false);

  /*
   * 직군별 인재상 & JD는 모집 전에만 공개한다. 그 외에는 모집 안내로 돌려보낸다.
   * 모집 전인지 확인하기 전에는 내용을 그리지 않아, 돌려보내기 전에 페이지가 잠깐 보이지 않게 한다.
   */
  useEffect(() => {
    if (RECRUITING_STATUS() === RecruitStatus.PRE) {
      setIsOpen(true);
      return;
    }
    router.replace(Path.Recruit);
  }, [router]);

  const handleChangeJob = (name: string) => {
    const nextJob = RECRUIT_JOBS.find((recruitJob) => recruitJob.name === name);
    if (nextJob) {
      router.push(`${Path.Recruit}/${nextJob.slug}`, undefined, {
        scroll: false,
      });
    }
  };

  if (!isOpen) return <Placeholder />;

  return (
    <>
      <JobBanner
        title={RECRUIT_JOB_BANNER.title}
        description={RECRUIT_JOB_BANNER.description}
      />
      <Layout>
        <TabBox>
          <UnderlineTabs
            tabs={jobNames}
            currentTab={job.name}
            onChange={handleChangeJob}
            idPrefix={TAB_ID_PREFIX}
            label="직군"
          />
        </TabBox>
        <Content {...getTabPanelProps(TAB_ID_PREFIX, jobNames, job.name)}>
          <JobDetail job={job} />
        </Content>
      </Layout>
    </>
  );
}

/*
 * 시안: 배너 높이 330px.
 * 글이 두 줄씩으로 접히는 폭에서는 높이가 늘어 배경 그림이 그만큼 확대되므로, 위아래 여백을 줄여 330px을 지킨다.
 */
const JobBanner = styled(Banner)`
  && {
    box-sizing: border-box;
    min-height: 330px;

    ${media.custom(1600)} {
      padding: 108px 0 48px 0;
    }

    ${media.tablet} {
      padding: 146px 0 93px 0;
    }

    ${media.mobile} {
      padding: 130px 0 64px 0;
    }
  }
`;

/* 시안: 본문 폭 1040px, 탭 위 56px, 탭 아래 48px, 본문 아래 80px */
const Layout = styled.div`
  box-sizing: content-box;
  max-width: 1040px;
  margin: 0 auto;
  /* 좌우 여백은 위 배너의 글자 시작점(80px)과 맞춘다 */
  padding: 56px 80px 80px;

  ${media.mobile} {
    padding: 32px 20px 100px;
  }
`;

const TabBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;

  /* 탭이 화면보다 넓으면 왼쪽부터 보이게 한다 */
  ${media.mobile} {
    justify-content: flex-start;
    margin-bottom: 32px;
  }
`;

const Content = styled.div``;

/* 내용을 그리기 전에 푸터가 화면 위로 올라오지 않게 자리를 잡아 둔다 */
const Placeholder = styled.div`
  min-height: 100vh;
`;

export default RecruitJobPage;
