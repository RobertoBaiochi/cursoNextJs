import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin-inline: auto;
    padding: ${theme.spacing.large};

  `};
`;
