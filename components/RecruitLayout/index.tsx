import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface RecruitLayoutProps {
  isRecruit: boolean;
  children: ReactNode;
}

function RecruitLayout({
  isRecruit,
  children,
}: RecruitLayoutProps): ReactElement {
  return (
    <RecruitLayoutContainer isRecruit={isRecruit}>
      {children}
    </RecruitLayoutContainer>
  );
}

const RecruitLayoutContainer = styled.div<{ isRecruit: boolean }>`
  width: 100%;
  ${(props) =>
    props.isRecruit
      ? css`
          background-color: #505050;
          color: ${({ theme }) => theme.palette.white};
        `
      : css`
          background-color: ${({ theme }) => theme.palette.white};
          color: ${({ theme }) => theme.palette.black};
        `}
`;

export default RecruitLayout;
