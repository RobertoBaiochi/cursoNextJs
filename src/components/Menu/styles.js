import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)};

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacing.large};
        display: flex;
        justify-content: center;
      }

    }

  `};
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacing.xxlarge} 0;
    }
  `};
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
      z-index: 6;
      position: fixed;
      top: 2rem;
      right: 2rem;
      width: ${theme.font.sizes.xlarge};
      height: ${theme.font.sizes.xlarge};
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      display: none;
      border: none;
      pointer-events: ${visible ? 'none' : 'all'};

      @media ${theme.media.lteMedium} {
        display: flex;
        align-items: center;
        justify-content: center;

      }

      > svg {
        width: ${theme.spacing.medium};
        height: ${theme.spacing.medium};
      }
  `};
`;
