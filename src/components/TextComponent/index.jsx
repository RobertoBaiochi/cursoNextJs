import P from 'prop-types';
import * as Styled from './styles';

const TextComponent = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

export default TextComponent;

TextComponent.propTypes = {
  children: P.node.isRequired,
};
