import P from 'prop-types';

import Head from 'next/head';

import GridTwoColumn from '../../components/GridTwoColumn';
import GridContent from '../../components/GridContent';
import GridSection from '../../components/GridSection';
import GridGallery from '../../components/GridGallery';
import PageNotFound from '../PageNotFound';

import config from '@/config';

import Base from '../Base';

function Home({ data }) {
  if (!data || !data.length) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>
          {title} - {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridSection key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridGallery key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;

Home.propTypes = {
  data: P.array,
};
