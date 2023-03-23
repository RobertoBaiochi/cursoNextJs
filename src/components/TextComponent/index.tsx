import * as Styled from './styles';

export type TextComponentProps = {
  children: string;
};

const TextComponent = ({ children }: TextComponentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

export default TextComponent;
