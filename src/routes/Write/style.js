import { theme } from "../../util/style";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  ${theme.lightTheme.font.Headline1B};
  font-weight: 700;
`;

export const TitleInput = styled.input`
  border-radius: var(--radius-2, 8px);
  border: 1px solid var(--border-gray-1, #d5d7dd);
  background: #fff;
  display: flex;
  width: 728px;
  height: 58px;
  padding: 16px 680px 16px 16px;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 4%;
`;
export const Content = styled.input`
  display: flex;
  width: 728px;
  height: 244px;
  padding: 16px 680px 302px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: var(--radius-2, 8px);
  border: 1px solid var(--border-gray-1, #d5d7dd);
  background: #fff;
`;

export const Button = styled.button`
  display: flex;
  width: 728px;
  padding: 14px 80px;
  justify-content: center;
  align-items: center;
  gap: gap-1;
  border-radius: var(--radius-2, 8px);
  background: var(--Button-primary-enabled, #4d8eff);
  color: white;
  margin-top: 5%;
`;

