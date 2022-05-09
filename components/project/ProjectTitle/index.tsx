import styled from 'styled-components';

interface Props {
  isCenter?: boolean;
}

export const ProjectTitle = styled.div<Props>`
  ${({ theme }) => theme.textStyle.web.Title};
  ${({ isCenter }) => isCenter && 'text-align: center;'}
`;
