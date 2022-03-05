import Yapp from 'constants/yapp';

export const CONTACT_LIST = [
  {
    social: 'mail' as const,
    title: '메일' as const,
    content: Yapp.YAPP_OFFICIAL_EMAIL,
    buttonText: '메일로 문의하기' as const,
    link: `mailto:${Yapp.YAPP_OFFICIAL_EMAIL}`,
  },
  {
    social: 'kakao' as const,
    title: '카카오톡' as const,
    content: Yapp.YAPP_OFFICIAL_KAKAO,
    buttonText: '카카오톡으로 문의하기' as const,
    link: Yapp.YAPP_KAKAO,
  },
  {
    social: 'facebook' as const,
    title: '페이스북' as const,
    content: Yapp.YAPP_OFFICIAL_FACEBOOK,
    buttonText: '페이스북 페이지로 이동하기' as const,
    link: Yapp.YAPP_FACEBOOK,
  },
  {
    social: 'instagram' as const,
    title: '인스타그램' as const,
    content: Yapp.YAPP_OFFICIAL_INSTAGRAM,
    buttonText: '인스타그램 방문하기' as const,
    link: Yapp.YAPP_INSTAGRAM,
  },
];
