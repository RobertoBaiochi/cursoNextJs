import P from 'prop-types';
import * as Styled from './styles';
import Link from 'next/link';

import Heading from '../Heading';

const LogoLink = ({ text, srcImg = '', link }) => {
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

export default LogoLink;

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
