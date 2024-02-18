import { theme } from "../../util/style";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15%;
`;

export const TextBox = styled.div`
  position: absolute;
  top: 4%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0 14% 0 14%;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 2% 0 3% 0;
`;
export const Title = styled.p`
  display: flex;
  align-items: flex-start;
  ${theme.lightTheme.font.Headline1B};
  font-weight: 700;
  width: 100%;
`;

export const SubTitle = styled.p`
  display: flex;
  margin-left: 15%;
  color: var(--Text-text-gray-2, #9da3af);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 15%;
`;

export const Content = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  padding: 0 5% 0 0;
`;

export const TitleInput = styled.input`
  border-radius: var(--radius-2, 8px);
  border: 1px solid var(--border-gray-1, #d5d7dd);
  background: #fff;
  display: flex;
  width: 1050px;
  height: 48px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 10%;
`;

export const CommentBox = styled.div`
  position: absolute;
  top: 60%;
  left: 14%;
  display: flex;
  flex-direction: column;
`;
export const Comment = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--Text-text-black, #0f0f0f);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

export const Number = styled.p`
  color: var(--Text-text-primary, #4d8eff);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin-left: 2%;
`;

export const Comment1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  color: var(--Text-text-black, #0f0f0f);
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: flex-start;
  width: 58em;
`;

export const Date = styled.div`
  color: var(--Text-text-gray-2, #9da3af);
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 15em;
`;

export const CommentContent = styled.div`
  display: flex;
  margin-top: 2%;
  color: var(--Text-text-black, #0f0f0f);
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Answer = styled.div``;

export const AnswerTitle = styled.p`
  color: var(--Text-text-primary, #4d8eff);
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: flex-start;
  margin-top: 3%;
`;

export const Comment2 = styled.p`
  display: flex;
  flex-direction: column;
  padding: 1% 0 0 2%;
`;
