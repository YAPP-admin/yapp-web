import { RECRUIT_DEVELOPER_FIELD_NAMES } from 'database/recruit';
import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import getDeveloperFieldExplain from 'utils/getDeveloperFieldExplain';
import RecruitFieldExplain from './RecruitFieldExplain';

export type DeveloperFieldName = 'iOS' | 'Android' | 'Front-End' | 'Back-End';

function RecruitDeveloper(): ReactElement {
  const [developField, setDevelopField] = useState<DeveloperFieldName>(
    RECRUIT_DEVELOPER_FIELD_NAMES[0],
  );

  const handleClick = (developFieldName: DeveloperFieldName) =>
    setDevelopField(developFieldName);

  return (
    <RecruitDeveloperWrapper>
      <DeveloperListStyled>
        {RECRUIT_DEVELOPER_FIELD_NAMES.map((developFieldName, index) => (
          <React.Fragment key={`RECRUIT_DEV_${index}`}>
            <DeveloperItem
              key={developFieldName}
              onClick={() => handleClick(developFieldName)}
              isSelected={developField === developFieldName}
            >
              {developFieldName}
            </DeveloperItem>
            {index !== RECRUIT_DEVELOPER_FIELD_NAMES.length - 1 && (
              <DividerLine />
            )}
          </React.Fragment>
        ))}
      </DeveloperListStyled>

      <RecruitFieldExplain
        fieldName="개발자"
        explainContents={getDeveloperFieldExplain(developField)}
      />
    </RecruitDeveloperWrapper>
  );
}

const RecruitDeveloperWrapper = styled.div`
  margin-top: 32px;
`;

const DeveloperListStyled = styled.div`
  width: 722px;
  margin: 0 auto;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.textStyle.web.Subtitle};
  color: #898989; // @Todo 와이어프레임 임시 컬러
  ${media.mobile} {
    width: 300px;
    height: 21px;
    ${({ theme }) => theme.textStyle.mobile.Body_Point2};
  }
`;

const DeveloperItem = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.palette.black};
      border-bottom: 4px solid ${({ theme }) => theme.palette.black};
      ${media.mobile} {
        border-bottom: 2px solid ${({ theme }) => theme.palette.black};
      }
    `}
  height: 100%;
  ${media.mobile} {
    line-height: 10px;
  }
`;

const DividerLine = styled.div`
  width: 2px;
  height: 20px;
  background-color: #dadada; // @Todo 와이어프레임 임시 컬러
`;

export default RecruitDeveloper;
