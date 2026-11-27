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
    <Page>
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
    </Page>
  );
}

/*
 * macOS 브라우저는 기본값으로 글자를 Figma보다 한 단계 두껍게 그린다(글자 잉크량 약 10% 많음).
 * 회색조 안티에일리어싱으로 그리면 Figma 렌더와 같은 두께가 된다. 다른 OS에는 영향이 없다.
 */
const Page = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

/* 헤더 메뉴로 이동할 때 섹션 윗부분이 고정 헤더(높이 60px)에 가리지 않게 한다 */
const Main = styled.main`
  section[id] {
    scroll-margin-top: 60px;
  }
`;

export default HackathonPage;
