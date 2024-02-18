import styled from "styled-components";

const MyMessage = styled.span`
  display: inline-block;
  padding: 8px 24px;
  max-width: 400px;
  background-color: #e1ecff;
  color: #4d8eff;
`;
const BotMessage = styled.div`
  position: relative;
  left: 50px;
  background-color: #9da3af;
  color: #f1f2f4;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #9da3af;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  display: inline-block;
  word-wrap: break-word;
  width: 100%;
`;

const Align = styled.div`
  display: flex;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-start" : "flex-end"};

  & + & {
    margin-top: 24px;
  }
`;

export default function Message({ talker, message }) {
  if (talker === "bot")
    return (
      <Align align="left">
        <BotMessage>
          <Text>{message}</Text>
        </BotMessage>
      </Align>
    );
  else
    return (
      <Align align="right">
        <MyMessage>
          <Text>{message}</Text>
        </MyMessage>
      </Align>
    );
}
