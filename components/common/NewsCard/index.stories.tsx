import { Meta, Story } from '@storybook/react';
import NewsCard from 'components/common/NewsCard';
import { PaletteKeyTypes } from 'styles/theme';

const example = {
  data: {
    title: '26기 대상 수상팀, 쏙(SSOK)을 만나다',
    date: 'Sep 22, 2025',
    content:
      '데모데이의 마지막을 장식한 대상은 여행 숙소 비교 서비스 ‘쏙(SSOK)’ 팀이 차지했습니다. 숙소 링크만 넣으면 자동으로 비교표가 완성되고, 친구와도 손쉽게 공유할 수 있는 편리함 덕분에 많은 참가자들의 호응을 얻었죠.',
    thumbnail:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VyVulLh4zlRzxywAABKHLA.png',
    url: 'https://medium.com/@about.yapp/26%EA%B8%B0-%EB%8C%80%EC%83%81-%EC%88%98%EC%83%81%ED%8C%80-%EC%8F%99-ssok-%EC%9D%84-%EB%A7%8C%EB%82%98%EB%8B%A4-48384cca1c36',
  },
  color: 'circus_blue',
  fontColor: 'white_100',
};

export default {
  title: 'YAPP Design System/Component/NewsCard',
  component: NewsCard,
  parameters: {
    docs: {
      description: {
        component: 'NewsCard',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <NewsCard
    data={example.data}
    color={example.color as PaletteKeyTypes}
    fontColor={example.fontColor as PaletteKeyTypes}
    {...args}
  />
);

export const defaultNewsCard = Template.bind({});
defaultNewsCard.args = {};
