import * as Styled from './styles';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

export type GridSectionElementProps = {
  title: string;
  description: string;
};

export type GridSectionProps = {
  background?: boolean;
  title: string;
  description: string;
  grid: GridSectionElementProps[];
  sectionId?: string;
  component?: string;
};

const GridSection = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridSectionProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

export default GridSection;
