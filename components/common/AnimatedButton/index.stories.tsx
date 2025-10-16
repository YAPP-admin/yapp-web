import { Meta, Story } from '@storybook/react';
import AnimatedButton, { AnimatedButtonProps } from '.';

export default {
  title: 'YAPP Design System/Component/AnimatedButton',
  component: AnimatedButton,
  parameters: {
    docs: {
      description: {
        component: '홈, 리크루트 페이지에서 사용되는 애니메이션 버튼',
      },
    },
  },
  argTypes: {
    width: {
      type: 'number',
    },
    height: {
      type: 'number',
    },
    buttonText: { type: 'string' },
    href: { type: 'string' },
    variant: { type: 'string' },
  },
} as Meta;

const Template: Story<AnimatedButtonProps> = (args) => (
  <AnimatedButton {...args} />
);

export const PrimaryAnimatedButton = Template.bind({});

PrimaryAnimatedButton.args = {
  className: 'recruitButton',
  buttonText: '21기에서 만나요!',
};

export const SecondaryAnimatedButton = Template.bind({});

SecondaryAnimatedButton.args = {
  className: 'recruitButton',
  buttonText: '21기에서 만나요!',
  variant: 'black',
};

export const DisabledAnimatedButton = Template.bind({});

DisabledAnimatedButton.args = {
  buttonText: '21기에서 만나요!',
  variant: 'primary',
  disabled: true,
};

export const SmallSizeAnimatedButton = Template.bind({});

SmallSizeAnimatedButton.args = {
  variant: 'primary',
  buttonText: '지원하기',
};
