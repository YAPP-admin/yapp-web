import styled from 'styled-components';
import media from 'styles/media';

export const ProjectSubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Title};
  text-align: center;
  margin-bottom: 72px;
  ${media.mobile} {
    margin-bottom: 32px;
    ${({ theme }) => theme.textStyle.mobile.Title_2};
  }
`;
