import P from 'prop-types';
import * as Styled from './styles';

const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default SectionContainer;

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
