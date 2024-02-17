import styled, { css } from "styled-components";

export const CheckboxStyle = styled.div`
  display: inline-block;
  border: #d5d7dd;
  border-radius: 4px;
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ checked }) =>
    checked &&
    css`
      background-color: #4d8eff;
    `}
`;

export const ChooseLayout = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ gap }) => css`
    & + & {
      margin-top: ${gap}px;
    }
  `}
`;

export const RadioStyle = styled.input`
  appearance: none;
  border: 2px solid #d5d7dd;
  border-radius: 50%;
  width: 24px;
  height: 24px;

  &:checked {
    border: 2px solid #4d8eff;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      width: 12px;
      height: 12px;
      background-color: #4d8eff;
      border-radius: 50%;
    }
  }
`;
