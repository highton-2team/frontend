import { theme } from "../../util/style";
import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  border-right: 1px solid #d5d7dd;
  height: 92vh;

  position: fixed;
  top: 8%;
  left: 0;

  background-color: white;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2%;
`;

export const AsideTitle = styled.p`
  color: ${theme.lightTheme.color.Gray2};
  ${theme.lightTheme.font.SubheadB};
  display: flex;
  align-items: flex-start;
  font-weight: 700;
  margin-bottom: 10%;
  padding: 2%;
`;

export const AsideItem = styled.p`
  display: flex;
  align-items: flex-start;
  color: ${theme.lightTheme.color.Gray2};
  ${theme.lightTheme.font.SubheadB};
  padding: 5%;
  width: 240px;
  font-weight: 700;

  &:hover {
    width: 220px;
    background-color: ${theme.lightTheme.color.Blue1};
    ${theme.lightTheme.font.SubheadB};
    color: ${theme.lightTheme.color.Blue4};
    border-radius: 5px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90%;
  width: 210px;
  margin: auto;
  color: white;
  background-color: #4d8eff;
  ${theme.lightTheme.font.BodyB};
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
`;

export const MainContent = styled.p`
  position: fixed;
  width: 100%;
  padding: 3% 50% 0 0;
  left: 20%;
  display: flex;
  align-items: flex-start;
  ${theme.lightTheme.font.SubheadM};
  color: ${theme.lightTheme.color.Black};
  font-weight: 700;
  background-color: white;
`;

export const SubContent = styled.p`
  position: fixed;
  background-color: white;
  padding-bottom: 2%;
  top: 12%;
  left: 20%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  ${theme.lightTheme.font.Headline1B};
  color: ${theme.lightTheme.color.Blue4};
  font-weight: 700;
`;

export const WriteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 12%;
  left: 90%;
  width: 120px;
  margin: auto;
  color: white;
  background-color: #4d8eff;
  ${theme.lightTheme.font.SubheadB};
`;
export const PostBox = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  margin: 12% 10% 10% 10%;
  height: 100%;
`;

export const Post = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 35em;
  height: 10em;
  flex-shrink: 0;
  border: 1px solid var(--border-gray-1, #d5d7dd);
`;

export const PostImg = styled.img`
  width: 7em;
  height: 7em;
  padding-left: 2%;
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: flex-start;
  ${theme.lightTheme.font.Headline3B};
  color: ${theme.lightTheme.color.Black};
`;

export const PostSubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  color: #9da3af;
  ${theme.lightTheme.font.caption1B};
  margin-bottom: 5%;
`;

export const Content = styled.div`
  color: ${theme.lightTheme.color.Black};
  ${theme.lightTheme.font.caption1B};
`;

export const PostDate = styled.div`
  display: flex;
  align-items: flex-start;
  color: #9da3af;
  ${theme.lightTheme.font.caption1B};
  margin-bottom: 1%;
  background-color: white;
`;

export const PostTag = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #ebffdb;
  color: #06e000;
  ${theme.lightTheme.font.SubheadM};
  width: 5em;
`;

export const PostContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-self: flex-start;
  background-color: white;
  padding: 4%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`;

export const MainBox = styled.div`
  background-color: white;
`;
