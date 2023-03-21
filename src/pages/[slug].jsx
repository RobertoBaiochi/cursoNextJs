export default function Page() {
  return <h1>Oi</h1>;
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { slug: 'udemy' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  console.log(ctx);
  return {
    props: {
      name: 'Roberto',
    },
  };
};
