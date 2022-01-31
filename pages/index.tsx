import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return <Wrapper>Home Component</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  font-size: 10rem;
  font-weight: 800;
`;

export default Home;
