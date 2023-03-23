import * as Styled from './styles';
import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';

export type GridGalleryElementProps = {
  srcImg: string;
  altText: string;
};

export type GridGalleryProps = {
  background?: boolean;
  title: string;
  description: string;
  grid?: GridGalleryElementProps[];
  sectionId?: string;
  component?: string;
};

const GridGallery = ({
  background = false,
  title,
  description,
  grid,
  sectionId = '',
}: GridGalleryProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.srcImg}${el.altText}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

export default GridGallery;
