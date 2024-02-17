import styled, { css } from "styled-components";

export const AsideStyle = styled.div`
  width: 240px;
  border-right: 1px solid #d5d7dd;
  height: 92vh;

  position: fixed;
  top: 8%;
  left: 0;

  background-color: white;
`;

export const AsideTitle = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  color: #9da3af;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;

export const AsideList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AsideListTitle = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: #9da3af;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 16px;
  margin-bottom: 16px;
`;

export const AsideListItem = styled.div`
  height: 48px;
  padding: 14px 14px 14px 8px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #9da3af;
  margin-left: 16px;
  border-radius: 8px;
  cursor: pointer;

  ${({ clicked }) =>
    clicked &&
    css`
      background-color: #e1ecff;
      color: #4d8eff;
    `}
`;

export const PlusButton = styled.div``;
