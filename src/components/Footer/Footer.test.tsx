import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Footer from '.';

describe('<Footer />', () => {
  it('should render html', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Teste</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Teste' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 2.4rem;
      }

      .c2 {
        max-width: 120rem;
        width: 100%;
        margin-inline: auto;
        padding: 3.2rem;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c3 {
        font-size: 1.6rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <p
              class="c3 c4"
            >
              <h1>
                Teste
              </h1>
            </p>
          </div>
        </footer>
      </div>
    `);
  });
});
