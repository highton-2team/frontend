import styled from "styled-components";

const MyMessage = styled.div`
  position: relative;
  left: 200px;
  background-color: #4d8eff;
  color: #e1ecff;
  font-size: 14px;
  font-weight: 500;
  justify-content: right;
  display: inline-block;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #4d8eff;
  border-radius: 15px;
  margin-bottom: 20px;
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
`;

export default function Message({ talker, message }) {
  if (talker === "bot")
    return (
      <BotMessage>
        <Text>{message}</Text>
      </BotMessage>
    );
  else
    return (
      <MyMessage>
        <Text>{message}</Text>
      </MyMessage>
    );
}
