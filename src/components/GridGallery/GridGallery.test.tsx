import { renderTheme } from '../../styles/render-theme';
import GridGallery from '.';

import mock from './mock';

describe('<GridGallery />', () => {
  it('should match with snapshot', () => {
    const { container } = renderTheme(<GridGallery {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
