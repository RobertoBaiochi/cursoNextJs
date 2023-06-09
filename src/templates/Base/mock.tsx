import linksMock from '../../components/NavLinks/mock';

import gridMock from '../../components/GridSection/mock';
import GridSection from '../../components/GridSection';

import { BaseProps } from '.';

export const mockBase = {
  children: (
    <>
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
      <GridSection {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de footer</p>',
} as BaseProps;
