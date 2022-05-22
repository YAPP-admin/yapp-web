import {
  RECRUIT_EXPLAIN_ANDROID_DEVELOPER,
  RECRUIT_EXPLAIN_BACKEND_DEVELOPER,
  RECRUIT_EXPLAIN_FRONTEND_DEVELOPER,
  RECRUIT_EXPLAIN_IOS_DEVELOPER,
} from 'database/recruit';
import { DeveloperFieldName } from 'components/recruit/RecruitField/RecruitDeveloper';

const getDeveloperFieldExplain = (field: DeveloperFieldName) => {
  switch (field) {
    case 'iOS':
      return RECRUIT_EXPLAIN_IOS_DEVELOPER;
    case 'Android':
      return RECRUIT_EXPLAIN_ANDROID_DEVELOPER;
    case 'Front-End':
      return RECRUIT_EXPLAIN_FRONTEND_DEVELOPER;
    case 'Back-End':
      return RECRUIT_EXPLAIN_BACKEND_DEVELOPER;
  }
};

export default getDeveloperFieldExplain;
