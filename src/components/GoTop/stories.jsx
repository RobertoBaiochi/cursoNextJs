import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
};

export const Template = (args) => {
  return (
    <div>
      <GoTop {...args} />
    </div>
  );
};
