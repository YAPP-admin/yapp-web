import styled from 'styled-components';
import media from 'styles/media';

export const ProjectTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Title};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Title_1};
  }
`;