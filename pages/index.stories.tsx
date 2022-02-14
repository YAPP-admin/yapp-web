import { Story, Meta } from '@storybook/react';
import Home from './index';
import { FloatingButton, Header, Footer } from 'components';
import LandingMain from 'pages/components/LandingMain';

export default {
  title: 'YAPP Design System/Page/Home',
  component: Home,
  parameters: {
    docs: {
      description: {
        component: '랜딩 페이지',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <>
    <LandingMain />
    <Header />
    <Home {...args} />
    <FloatingButton />
    <Footer />
  </>
);

export const DefaultHome = Template.bind({});
DefaultHome.args = {};
