import styled, { css } from "styled-components";

const colors = {
  primary: { primary: "#4D8EFF", disable: "#B2CFFF", active: "#0054E5" },
  gray: { primary: "#9DA3AF", disable: "#D5D7DD", active: "#676F7E" },
};

export const ButtonStyle = styled.button`
  padding: 0;
  outline: none;

  ${({ size }) => sizeStyle[size]};
  ${({ variant, color }) => variantStyle[variant](color)};

  ${({ disable }) =>
    disable &&
    css`
      background-color: ${({ color }) => colors[color].disable};
      color: white;
    `}
  &:active {
    background-color: ${({ color }) => colors[color].active};
    color: white;
    border: none;
  }
`;

const variantStyle = {
  contained: (color) => css`
    background-color: ${colors[color].primary};
    color: white;
  `,
  outlined: (color) => css`
    background-color: white;
    color: ${colors[color].primary};
  `,
  text: (color) => css`
    background-color: white;
    color: ${colors[color].primary};
  `,
};

const sizeStyle = {
  sm: css`
    width: 76px;
    height: 28px;
    border-radius: 4px;
  `,
  md: css`
    width: 92px;
    height: 36px;
    border-radius: 8px;
  `,
  lg: css`
    width: 188px;
    height: 48px;
  `,
};
