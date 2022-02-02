import type { NextPage } from 'next';
import styled from 'styled-components';
import { Button } from 'components';
import Box from 'components/Box';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Button fontColor="black" buttonColor="white" borderColor="white">
        20기 지원하기
      </Button>
      <Button fontColor="white" buttonColor="gray" borderColor="white">
        후원 문의
      </Button>
      <Button fontColor="black" buttonColor="white" borderColor="lightGray">
        프로젝트 더보기
      </Button>
      <Box width="200px" height="200px">
        테스트1
      </Box>
      <Box
        width="200px"
        height="200px"
        backgroundColor="lightGray"
        borderRadius="50%"
      >
        테스트2
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Home;
