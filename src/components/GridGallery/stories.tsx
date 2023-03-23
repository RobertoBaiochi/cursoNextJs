import { Meta, Story } from '@storybook/react/types-6-0';
import GridGallery, { GridGalleryProps } from '.';

import mock from './mock';

export default {
  title: 'GridGallery',
  component: GridGallery,
  args: mock,
} as Meta;

export const Template: Story<GridGalleryProps> = (args) => {
  return (
    <div>
      <GridGallery {...args} />
    </div>
  );
};
