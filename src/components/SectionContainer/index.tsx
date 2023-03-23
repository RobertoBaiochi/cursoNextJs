import * as Styled from './styles';

export type SectionContainerProps = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default SectionContainer;
