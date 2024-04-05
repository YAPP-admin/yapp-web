import { FieldNameTypes } from 'components/recruit/RecruitField';
import Yapp from 'constants/yapp';

const getRecruitLink = (field?: FieldNameTypes) => {
  const {
    YAPP_RECRUIT_DESIGNER,
    YAPP_RECRUIT_PROJECT_MANAGER,
    YAPP_RECRUIT_IOS,
    YAPP_RECRUIT_ANDROID,
    YAPP_RECRUIT_FRONT_END,
    YAPP_RECRUIT_BACK_END,
    YAPP_RECRUIT_CROSS_PLATFORM,
  } = Yapp;
  switch (field) {
    case 'PM':
      return YAPP_RECRUIT_PROJECT_MANAGER;
    case '디자이너':
      return YAPP_RECRUIT_DESIGNER;
    case 'iOS':
      return YAPP_RECRUIT_IOS;
    case 'Android':
      return YAPP_RECRUIT_ANDROID;
    case 'Web':
      return YAPP_RECRUIT_FRONT_END;
    case 'Server':
      return YAPP_RECRUIT_BACK_END;
    case 'Flutter':
      return YAPP_RECRUIT_CROSS_PLATFORM;
  }
};

export default getRecruitLink;
