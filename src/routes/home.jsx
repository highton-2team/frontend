import { useEffect, useState } from "react";
import styled from "styled-components";
import Message from "../components/message";
import Task from "../components/task";
import axios from "axios";
import Aside from "../components/common/Aside";
import Layout from "../components/layout";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 320px;
`;

const Todo = styled.div`
  display: flex;
  position: relative;
  top: 50px;
  right: 100px;
  height: 100%;
  margin-bottom: auto;
  flex-direction: column;
`;

const Chat = styled.div`
  display: flex;
  position: relative;
  top: 70px;
  height: 100%;
  width: 100%;
  margin-bottom: auto;
  flex-direction: column;
`;

const Guide = styled.div`
  display: flex;
  position: relative;
  right: 30px;
  margin-bottom: 370px;
  flex-direction: column;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatList = styled.div`
<<<<<<< HEAD
  height: 600px;
  position: relative;
=======
  display: flex;
  height: 612px;
  flex-direction: column;
  justify-content: left;
>>>>>>> 0a972288ef0abcf5580b781bff0b910a44913c74
`;

const Form = styled.form`
  display: flex;
  position: relative;
  width: 700px;
  bottom: 20px;
  flex-direction: column;
`;

const Input = styled.input`
  border: 2px solid gray;
  padding: 20px;
  margin: 25px;
  border-radius: 10px;
  font-size: 16px;
  color: black;
  background-color: white;
  height: 60px;
  width: 600px;
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

const Recommend = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 250px;
  gap: 10px;
  margin-top: 50px;
`;

const RecommendButton = styled.button`
  background-color: white;
  height: 30px;
  width: 220px;
  color: #4d8eff;
  padding: 0;
  outline: none;
`;

const RecommendText = styled.text`
  font-size: 12px;
`;

const Goal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const GoalText = styled.text`
  display: inline-block;
  width: 100px;
  color: #4d8eff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const DueText = styled.text`
  display: inline-block;
  width: 100px;
  color: #4d8eff;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const TaskBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TaskList = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  justify-content: left;
`;

export default function Home() {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);
  const [todos, setTodos] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [goal, setGoal] = useState({});

  const username = "사용자"; // TODO: user authentication

  const onChange = (e) => {
    setPrompt(e.target.value);
  };
  const onSubmit = async (e) => {
    if (isLoading || prompt === "" || prompt.length > 180) return;
    e.preventDefault();
    if (!isChatting) setIsChatting(true);
    try {
      setLoading(true);
      setPrompt("");
      setChats((chats) => [...chats, { talker: "human", message: prompt }]);
      getResponse();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const getResponse = async () => {
    try {
      const data = { message: prompt };
      const { res } = await axios({
        method: "post",
        url: `/api/todolist/chatbot`,
        data: JSON.stringify(data),
      });
      const result = await res.json();
      const response = {
        talker: "bot",
        message: result.data,
      };
      setChats((chats) => [...chats, response]);
    } catch (e) {
      console.log(e);
    }
  };
  const getTodo = async () => {
    try {
      const { res } = await axios({
        method: "get",
        url: `/api/todolist`,
      });
      const result = await res.json();
      setGoal(result.data);
      setTodos(goal.todos);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <>
<<<<<<< HEAD
=======
      <Aside />
>>>>>>> 0a972288ef0abcf5580b781bff0b910a44913c74
      <Layout />
      <Wrapper>
        <Main>
          <Todo>
            <Goal>
              <GoalText>{`목표: ${goal.goal ?? "없음"}`}</GoalText>
              <DueText>{`${
                goal.endDate ? `${goal.endDate}까지` : "미정"
              }`}</DueText>
            </Goal>
            <TaskBox>
              <TaskList>
                {todos.map((todo) => {
                  return <Task {...todo} />;
                })}
              </TaskList>
            </TaskBox>
          </Todo>
          <Chat>
            {isChatting ? (
              <ChatBox>
                <ChatList>
                  {chats.map((chat) => {
                    return <Message {...chat} />;
                  })}
                </ChatList>
              </ChatBox>
            ) : (
              <Guide>
                <Title>계획을 시작해 보세요!</Title>
                <Text>{`${username}님의 꿈을 이루기 위한 구체적인 계획을`}</Text>
                <Text>{`ChatGPT가 계획해줘요!`}</Text>
                <Recommend>
                  <RecommendButton
                    onClick={() => {
                      setPrompt("🔥 불과 맞서 싸우는 소방관이 되고 싶어요!");
                    }}
                  >
                    <RecommendText>
                      🔥 불과 맞서 싸우는 소방관이 되고 싶어요!
                    </RecommendText>
                  </RecommendButton>
                  <RecommendButton
                    onClick={() => {
                      setPrompt("🖌️ 디자이너가 되고 싶어요!");
                    }}
                  >
                    <RecommendText>🖌️ 디자이너가 되고 싶어요!</RecommendText>
                  </RecommendButton>
                  <RecommendButton
                    onClick={() => {
                      setPrompt("🤖 개발자가 되고 싶어요!");
                    }}
                  >
                    <RecommendText>🤖 개발자가 되고 싶어요!</RecommendText>
                  </RecommendButton>
                </Recommend>
              </Guide>
            )}
            <Form onSubmit={onSubmit}>
              <Input
                required
                rows={1}
                maxLength={180}
                onChange={onChange}
                value={prompt}
                placeholder={
                  isLoading ? "답변 생성중..." : "목표를 입력해 주세요."
                }
                disabled={isLoading}
              />
            </Form>
          </Chat>
        </Main>
      </Wrapper>
    </>
  );
}
