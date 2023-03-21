import GridGallery from '.';

import mock from './mock';

export default {
  title: 'GridGallery',
  component: GridGallery,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridGallery {...args} />
    </div>
  );
};
