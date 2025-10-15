import Banner from 'components/common/Banner';
import { StoryLayout } from 'components/story';
import MediumCard from 'components/story/MediumCard';
import React, { ReactElement } from 'react';
import fs from 'fs';
import path from 'path';
import { Medium } from 'types/medium';
import styled from 'styled-components';
import media from 'styles/media';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'database/medium.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  return {
    props: { data },
  };
}

function StoryPage({ data }: { data: Medium[] }): ReactElement {
  return (
    <StoryLayout>
      <Banner
        title={`YAPP 안의 사람들, 그리고 이야기`}
        description={`야뿌들의 성장 과정, 활동 후기,\n밋업 현장과 다양한 이야기를 담고 있어요.`}
      />
      <MediumList>
        {data?.map((medium) => (
          <MediumCard key={medium.title} medium={medium} />
        ))}
      </MediumList>
    </StoryLayout>
  );
}

const MediumList = styled.section`
  max-width: 1200px;
  display: grid;
  padding: 60px 80px;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 32px;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    padding: 32px 20px;
    grid-template-columns: 1fr;
  }
`;

export default StoryPage;
