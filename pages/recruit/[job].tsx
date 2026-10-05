import { type ReactElement, useEffect } from 'react';
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
        description: job.description,
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

  /* 직군별 인재상 & JD는 모집 전에만 공개한다. 그 외에는 모집 안내로 돌려보낸다 */
  useEffect(() => {
    if (RECRUITING_STATUS() !== RecruitStatus.PRE) {
      router.replace(Path.Recruit);
    }
  }, [router]);

  const handleChangeJob = (name: string) => {
    const nextJob = RECRUIT_JOBS.find((recruitJob) => recruitJob.name === name);
    if (nextJob) {
      router.push(`${Path.Recruit}/${nextJob.slug}`, undefined, {
        scroll: false,
      });
    }
  };

  return (
    <>
      <Banner
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

/* 시안: 본문 폭 1040px, 탭 위 56px, 탭 아래 48px */
const Layout = styled.div`
  box-sizing: content-box;
  max-width: 1040px;
  margin: 0 auto;
  padding: 56px 20px 160px;

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

export default RecruitJobPage;
