import Head from 'next/head';

import GridTwoColumn, {
  GridTwoColumnProps,
} from '../../components/GridTwoColumn';
import GridContent, { GridContentProps } from '../../components/GridContent';
import GridSection, { GridSectionProps } from '../../components/GridSection';
import GridGallery, { GridGalleryProps } from '../../components/GridGallery';
import PageNotFound from '../PageNotFound';

import config from '../../config';

import Base from '../Base';

import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps =
  | GridGalleryProps
  | GridSectionProps
  | GridTwoColumnProps
  | GridContentProps;

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
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
          return (
            <GridTwoColumn key={key} {...(section as GridTwoColumnProps)} />
          );
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridSection key={key} {...(section as GridSectionProps)} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridGallery key={key} {...(section as GridGalleryProps)} />;
        }
      })}
    </Base>
  );
}

export default Home;
