import {
  Award,
  Benefits,
  BottomBanner,
  Faq,
  Footer,
  Header,
  Intro,
  Judges,
  Partners,
  Program,
  Recruit,
  Talent,
  Topic,
  TopBanner,
} from 'components/hackathon';
import styled from 'styled-components';

/*
 * YAPP × goorm 해커톤 랜딩. 행사 뒤 2주 정도 유지하고 내린다.
 * 시안: YAPP 29기 웹사이트 / 29기 (해커톤) 페이지(node 8865:4018)
 */
function HackathonPage() {
  return (
    <>
      <Header />
      <Main>
        <TopBanner />
        <Intro />
        <Talent />
        <Topic />
        <Program />
        <Recruit />
        <Award />
        <Judges />
        <Benefits />
        <Faq />
        <BottomBanner />
        <Partners />
      </Main>
      <Footer />
    </>
  );
}

/* 헤더 메뉴로 이동할 때 섹션 윗부분이 고정 헤더(높이 60px)에 가리지 않게 한다 */
const Main = styled.main`
  section[id] {
    scroll-margin-top: 60px;
  }
`;

export default HackathonPage;
