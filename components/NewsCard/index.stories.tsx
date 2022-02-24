import { Meta, Story } from '@storybook/react';
import NewsCard from 'components/NewsCard';
import { NEWS_DATA } from 'database/home';

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

const Template: Story = (args) => <NewsCard data={NEWS_DATA[0]} {...args} />;

export const defaultNewsCard = Template.bind({});
defaultNewsCard.args = {};
