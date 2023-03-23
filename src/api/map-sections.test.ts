import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should test sections with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);

    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);

    expect(withNoComponent).toEqual([{}]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should map section two columns if data is empty', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map sections two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      image: {
        data: {
          attributes: {
            url: 'image.svg',
          },
        },
      },
      metadata: {
        section_id: 'home',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('image.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content if data is empty', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content if data is empty', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Intro',
      content: '<p>html</p>',
      metadata: {
        section_id: 'intro',
        background: false,
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('<p>html</p>');
    expect(data.title).toBe('Intro');
  });

  it('should map section grid with only text', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'My Grid',
      description: 'abc',
      metadata: {
        name: 'grid-one',
        section_id: 'grid-one',
        background: true,
      },
      text_grid: [
        {
          id: 1,
          title: 'Teste 1',
          description: 'desctiptionArray',
        },
        {
          id: 2,
          title: 'Teste 2',
          description: 'teste 2',
        },
        {
          id: 3,
          title: 'Teste 3',
          description: 'teste 3',
        },
      ],
      image_grid: [],
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.description).toBe('abc');
    expect(data.title).toBe('My Grid');
    expect(data.grid[0].title).toEqual('Teste 1');
    expect(data.grid[0].description).toEqual('desctiptionArray');
  });

  it('should map section grid if data is empty', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description: 'abc',
      metadata: {
        name: 'gallery',
        section_id: 'gallery',
        background: false,
      },
      text_grid: [],
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  alternativeText: 'texto',
                  url: 'image.jpg',
                },
              },
            ],
          },
        },
      ],
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('abc');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].altText).toBe('texto');
    expect(data.grid[0].srcImg).toBe('image.jpg');
  });
});
