import { Meta, Story } from '@storybook/react/types-6-0';
import GridSection, { GridSectionProps } from '.';

import mock from './mock';

export default {
  title: 'GridSection',
  component: GridSection,
  args: mock,
} as Meta;

export const Template: Story<GridSectionProps> = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
