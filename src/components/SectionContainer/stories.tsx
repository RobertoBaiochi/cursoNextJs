import { Meta, Story } from '@storybook/react/types-6-0';
import SectionContainer, { SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
