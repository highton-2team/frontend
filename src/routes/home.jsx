import { useEffect, useState } from "react";
import styled from "styled-components";
import Message from "../components/message";
import ChooseBox from "../components/common/choosebox";

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SideBar = styled.div``;

const Main = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Todo = styled.div``;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Guide = styled.div`
  display: flex;
  position: relative;
  top: 150px;
  margin-bottom: auto;
  flex-direction: column;
`;

const ChatBox = styled.div``;

const Form = styled.form`
  position: relative;
`;

const NewDream = styled.div``;

const Input = styled.input`
  border: 2px solid gray;
  padding: 20px;
  margin: 25px;
  border-radius: 10px;
  font-size: 16px;
  color: black;
  background-color: white;
  height: 60px;
  min-width: 600px;
  width: auto;
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;

const Title = styled.text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Text = styled.text`
  font-size: 14px;
  color: gray;
`;

const Recommend = styled.div``;

export default function Home() {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);
  const [todos, setTodos] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setLoading] = useState(false);
  const onClick = () => {};
  const onChange = (e) => {
    setPrompt(e.target.value);
  };
  const onSubmit = async (e) => {
    if (isLoading || prompt === "" || prompt.length > 180) return;
    e.preventDefault();
    if (!isChatting) setIsChatting(true);
    try {
      setLoading(true);
      console.log(prompt);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const fetchGoals = async () => {};
  useEffect(() => {
    fetchGoals();
  }, []);
  return (
    <Wrapper>
      <SideBar>
        <NewDream></NewDream>
      </SideBar>
      <Main>
        <Todo>
          <ChooseBox
            type="checkbox"
            list={[]}
            clickEvent={onClick}
            name="test"
            gap={10}
          />
        </Todo>
        <Chat>
          {isChatting ? (
            <ChatBox>
              {chats.map((chat, i) => {
                return <Message chat={chat} index={i} />;
              })}
            </ChatBox>
          ) : (
            <Guide>
              <Title>계획을 시작해 보세요!</Title>
              <Text>{`${"test"}님의 꿈을 이루기 위한 구체적인 계획을`}</Text>
              <Text>{`ChatGPT가 계획해줘요!`}</Text>
              <Recommend></Recommend>
            </Guide>
          )}
          <Form onSubmit={onSubmit}>
            <Input
              rows={1}
              maxLength={180}
              onChange={onChange}
              value={prompt}
              placeholder="목표를 입력해 주세요."
            />
          </Form>
        </Chat>
      </Main>
    </Wrapper>
  );
}
