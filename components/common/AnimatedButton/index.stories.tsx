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
  width: 190,
  height: 65,
  fontColor: 'white',
  buttonColor: 'orange_400',
  className: 'recruitButton',
  buttonText: '21기에서 만나요!',
};

export const SecondaryAnimatedButton = Template.bind({});

SecondaryAnimatedButton.args = {
  width: 190,
  height: 65,
  fontColor: 'black',
  buttonColor: 'grey_850',
  borderColor: 'lightGrey',
  className: 'recruitButton',
  buttonText: '21기에서 만나요!',
  variant: 'secondary',
};

export const DisabledAnimatedButton = Template.bind({});

DisabledAnimatedButton.args = {
  width: 190,
  height: 65,
  fontColor: 'black',
  buttonColor: 'grey_850',
  borderColor: 'lightGrey',
  className: 'recruitButton',
  buttonText: '21기에서 만나요!',
  variant: 'secondary',
  disabled: true,
};

export const SmallSizeAnimatedButton = Template.bind({});

SmallSizeAnimatedButton.args = {
  width: 120,
  height: 50,
  fontColor: 'black',
  buttonColor: 'grey_850',
  borderColor: 'lightGrey',
  className: 'recruitButton',
  buttonText: '지원하기',
};
