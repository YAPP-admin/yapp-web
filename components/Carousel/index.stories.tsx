import { Story, Meta } from '@storybook/react';
import Carousel, { CarouselProps } from 'components/Carousel';
import { CAROUSEL_DATA } from 'database/home';

export default {
  title: 'YAPP Design System/Component/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: 'Carousel',
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

const Template: Story<CarouselProps> = (args) => (
  <Carousel {...args} data={CAROUSEL_DATA} />
);

export const defaultCarousel = Template.bind({});
defaultCarousel.args = {};
