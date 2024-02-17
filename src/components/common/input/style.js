import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  width: 480px;
  height: 58px;
  border-radius: 8px;
  border: 1px solid #d5d7dd;
  padding: 16px;

  position: relative;
  display: flex;
  align-items: center;

  ${({ state }) =>
    state === "enabled" &&
    css`
      border: 1px solid #4d8eff;
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #e00001;
    `}
`;
export const InputStyle = styled.input`
  outline: none;
  border: none;
  background: none;
  width: 100%;
  font-size: 18px;
  color: #0f0f0f;
`;
export const Message = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  font-size: 18px;
  color: #9da3af;
  transform: translate(0%, -50%);
  opacity: 0;

  font-size: 14px;

  ${({ show }) =>
    show &&
    css`
      left: 0;
      top: 0;
      opacity: 1;
      transform: translate(0, -100%);
      transition-property: left, top;
      transition-duration: 0.2s;
    `}

  ${({ state }) =>
    state === "enabled" &&
    css`
      opacity: 1;
      color: #4d8eff;
      font-size: 14px;
      transition-property: font-size, left, top, color;
      transition-duration: 0.2s;
    `}

  ${({ error }) =>
    error &&
    css`
      opacity: 1;
      color: #e00001;
      font-size: 14px;
    `}
`;
