import { theme } from "../../util/style";
import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 2%;
  left: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${theme.lightTheme.color.Gray8};
  padding: 1%;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 1s ease-out;
`;

export const Text = styled.p`
  display: flex;
  ${theme.lightTheme.font.BodyB};
  color: ${theme.lightTheme.color.white};
  margin-right: 5%;
`;

export const Back = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
