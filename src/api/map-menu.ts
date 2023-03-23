/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from '../templates/Home';

export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { data: srcImg = '' } = '',
    menu_links: links = [],
  } = menu;

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = [] as any[]): MenuLinkProps[] => {
  return links.map((item: any): MenuLinkProps => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;
    return {
      newTab,
      children,
      link,
    };
  });
};

// {
//   logo_link: '#home',
//   logo_text: 'Logo',
//   logo: {
//     data: 'image.svg',
//   },
//   menu_links: [
//     {
//       link_text: 'intro',
//       url: '#intro',
//       open_in_new_tab: false,
//     },
//     {
//       link_text: 'grid-one',
//       url: '#grid-one',
//       open_in_new_tab: false,
//     },
//     {
//       link_text: 'gallery',
//       url: '#gallery',
//       open_in_new_tab: false,
//     },
//     {
//       link_text: 'grid-two',
//       url: '#grid-two',
//       open_in_new_tab: false,
//     },
//   ],
// }
