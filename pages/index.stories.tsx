import { Story, Meta } from '@storybook/react';
import Home from './index';
import { FloatingButton, Header, Footer } from 'components';
import IntroSection from 'pages/components/IntroSection';

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
    <IntroSection />
    <Header />
    <Home {...args} />
    <FloatingButton />
    <Footer />
  </>
);

export const DefaultHome = Template.bind({});
DefaultHome.args = {};
