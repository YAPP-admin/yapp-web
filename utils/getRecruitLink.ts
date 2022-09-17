import Yapp from 'constants/yapp';
import { FieldNameTypes } from 'components/recruit/RecruitField';

const getRecruitLink = (field: FieldNameTypes) => {
  const {
    YAPP_RECRUIT_DESIGNER,
    YAPP_RECRUIT_PROJECT_MANAGER,
    YAPP_RECRUIT_IOS,
    YAPP_RECRUIT_ANDROID,
    YAPP_RECRUIT_FRONT_END,
    YAPP_RECRUIT_BACK_END,
  } = Yapp;
  switch (field) {
    case '기획자':
      return YAPP_RECRUIT_PROJECT_MANAGER;
    case '디자이너':
      return YAPP_RECRUIT_DESIGNER;
    case 'iOS':
      return YAPP_RECRUIT_IOS;
    case 'Android':
      return YAPP_RECRUIT_ANDROID;
    case 'Front-End':
      return YAPP_RECRUIT_FRONT_END;
    case 'Back-End':
      return YAPP_RECRUIT_BACK_END;
  }
};

export default getRecruitLink;
