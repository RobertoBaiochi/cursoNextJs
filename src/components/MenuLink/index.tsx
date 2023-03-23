import * as Styled from './styles';

import Link from 'next/link';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    if (nextLink) {
      return (
        <Link href={link} passHref>
          <Styled.Container target={target}>{children}</Styled.Container>
        </Link>
      );
    }
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

export default MenuLink;
