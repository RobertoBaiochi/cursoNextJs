import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.xlarge};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacing.xlarge};
    }
  `};
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacing.large};
      text-align: center;
    }
  `};
`;

export const ImageContainer = styled.div`
  ${() => css`

  `};
`;

export const Image = styled.img`
  ${() => css`
    max-width: 100%;
  `};
`;
