import { Story, Meta } from '@storybook/react';
import GridSection from 'pages/components/GridSection';

export default {
  title: 'YAPP Design System/Component/AnimatedBox',
  component: GridSection,
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

const Template: Story = (args) => <GridSection {...args} />;

export const defaultAnimatedBox = Template.bind({});
defaultAnimatedBox.args = {};
