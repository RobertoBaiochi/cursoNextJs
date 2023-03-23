import * as Styled from './styles';

import SectionContainer from '../SectionContainer';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

export default SectionBackground;
