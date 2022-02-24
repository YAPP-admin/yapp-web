import { Story, Meta } from '@storybook/react';
import AnimatedBox, { AnimatedBoxProps } from 'components/AnimatedBox';

export default {
  title: 'YAPP Design System/Component/AnimatedBox',
  component: AnimatedBox,
  parameters: {
    docs: {
      description: {
        component: 'AnimatedBox',
      },
    },
  },
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<AnimatedBoxProps> = (args) => (
  <AnimatedBox {...args}>Mock</AnimatedBox>
);

export const defaultAnimatedBox = Template.bind({});
defaultAnimatedBox.args = {};
