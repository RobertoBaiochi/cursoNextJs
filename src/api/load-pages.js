import { mapData } from './map-data';
import config from '@/config';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug
    ? `?filtes[slug]=${slug.replace(/[^a-z0-9-_]/gi, '')}`
    : '';
  const url = `${config.url}/pages/${cleanSlug}&populate=deep`;

  const raw = await fetch(url);
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return data;
};
