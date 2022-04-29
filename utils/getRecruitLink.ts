import Yapp from 'constants/yapp';
import { FieldNameTypes } from 'components/recruit/RecruitField';

const getRecruitLink = (field: FieldNameTypes) => {
  const {
    YAPP_RECRUIT_DESIGNER,
    YAPP_RECRUIT_DEVELOPER,
    YAPP_RECRUIT_PROJECT_MANAGER,
  } = Yapp;
  switch (field) {
    case '기획자':
      return YAPP_RECRUIT_PROJECT_MANAGER;
    case '디자이너':
      return YAPP_RECRUIT_DESIGNER;
    case '개발자':
      return YAPP_RECRUIT_DEVELOPER;
  }
};

export default getRecruitLink;
