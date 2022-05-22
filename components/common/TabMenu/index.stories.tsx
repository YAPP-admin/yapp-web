import { Meta, Story } from '@storybook/react';
import TabMenu, { TabMenuProps } from 'components/common/TabMenu';
import { RECRUIT_FIELD_NAMES } from 'database/recruit';
import { PROJECT_CATEGORIES } from 'database/project';
import { useState } from 'react';

export default {
  title: 'YAPP Design System/Component/TabMenu',
  component: TabMenu,
  parameters: {
    docs: {
      description: {
        component: 'TabMenu',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<TabMenuProps> = (args) => {
  const [tab, setTab] = useState<any>(args.currentTab);

  return <TabMenu {...args} currentTab={tab} onClick={setTab} />;
};

export const RecruitTabMenu = Template.bind({});
export const ProjectsTabMenu = Template.bind({});

RecruitTabMenu.args = {
  tabs: RECRUIT_FIELD_NAMES,
  currentTab: RECRUIT_FIELD_NAMES[0],
};

ProjectsTabMenu.args = {
  tabs: PROJECT_CATEGORIES,
  currentTab: PROJECT_CATEGORIES[0],
};
