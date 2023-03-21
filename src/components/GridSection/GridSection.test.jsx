import { renderTheme } from '../../styles/render-theme';
import GridSection from '.';
import mock from './mock';

describe('<GridSection />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridSection {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridSection {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
