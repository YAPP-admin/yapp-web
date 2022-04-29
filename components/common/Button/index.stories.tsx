import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from 'components/common/Button';

export default {
  title: 'YAPP Design System/Component/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '홈페이지에 사용되는 모든 버튼',
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
    hasBorder: { type: 'boolean' },
    borderRadius: { type: 'number' },
    className: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});

// Props 전달
DefaultButton.args = {
  width: 252,
  height: 78,
  buttonColor: 'grey',
  fontColor: 'white',
  children: '프로젝트 더보기',
};
