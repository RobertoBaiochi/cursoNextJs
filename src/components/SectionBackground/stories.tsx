import { Meta, Story } from '@storybook/react/types-6-0';
import SectionBackground, { SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum
          maiores quasi sequi fuga ratione, eum animi impedit ipsam placeat
          reiciendis eligendi enim quas omnis iste, possimus quo debitis hic?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
} as unknown as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
