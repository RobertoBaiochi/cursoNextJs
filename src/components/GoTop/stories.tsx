import { Meta, Story } from '@storybook/react/types-6-0';
import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <GoTop {...args} />
    </div>
  );
};
