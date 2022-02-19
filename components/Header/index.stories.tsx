import { Meta, Story } from '@storybook/react';
import Header from 'components/Header';

export default {
  title: 'YAPP Design System/Component/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Header',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const defaultHeader = Template.bind({});
defaultHeader.args = {};
