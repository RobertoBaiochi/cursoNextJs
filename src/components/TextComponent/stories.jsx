import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Incidunt saepe debitis distinctio facilis quam voluptatem quae eos corrupti
    aut praesentium eius ipsa voluptates similique possimus voluptas nam dolore,
    sed maxime.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '64rem' }}>
      <TextComponent {...args} />
    </div>
  );
};
