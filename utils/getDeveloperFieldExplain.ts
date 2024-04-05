import { DeveloperFieldName } from 'components/recruit/RecruitField/RecruitDeveloper';
import {
  RECRUIT_EXPLAIN_ANDROID_DEVELOPER,
  RECRUIT_EXPLAIN_FLUTTER_DEVELOPER,
  RECRUIT_EXPLAIN_IOS_DEVELOPER,
  RECRUIT_EXPLAIN_SERVER_DEVELOPER,
  RECRUIT_EXPLAIN_WEB_DEVELOPER,
} from 'database/recruit';

const getDeveloperFieldExplain = (field: DeveloperFieldName) => {
  switch (field) {
    case 'iOS':
      return RECRUIT_EXPLAIN_IOS_DEVELOPER;
    case 'Android':
      return RECRUIT_EXPLAIN_ANDROID_DEVELOPER;
    case 'Web':
      return RECRUIT_EXPLAIN_WEB_DEVELOPER;
    case 'Server':
      return RECRUIT_EXPLAIN_SERVER_DEVELOPER;
    case 'Flutter':
      return RECRUIT_EXPLAIN_FLUTTER_DEVELOPER;
  }
};

export default getDeveloperFieldExplain;
