import { GridContentProps } from '../components/GridContent';
import {
  GridGalleryElementProps,
  GridGalleryProps,
} from '../components/GridGallery';
import {
  GridSectionElementProps,
  GridSectionProps,
} from '../components/GridSection';
import { GridTwoColumnProps } from '../components/GridTwoColumn';
import { SectionProps } from '../templates/Home';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapSections = (sections = [] as any): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (
  section = {} as any,
): GridTwoColumnProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcImg = '' } = {} } = {} } = {},
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {} as any): GridSectionProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text: any): GridSectionElementProps => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {} as any): GridGalleryProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: [
      {
        image: { data: grid = [] },
      },
    ],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((attr: any): GridGalleryElementProps => {
      const {
        attributes: { url: srcImg = '', alternativeText: altText = '' },
      } = attr;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
