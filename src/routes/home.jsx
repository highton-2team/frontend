import { useEffect, useState } from "react";
import styled from "styled-components";
import Message from "../components/message";
import Task from "../components/task";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 200px;
`;

const Todo = styled.div`
  display: flex;
  position: relative;
  top: 50px;
  height: 100%;
  margin-bottom: auto;
  flex-direction: column;
`;

const Chat = styled.div`
  display: flex;
  position: relative;
  top: 70px;
  height: 100%;
  margin-bottom: auto;
  flex-direction: column;
`;

const Guide = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 380px;
  flex-direction: column;
`;

const ChatBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatList = styled.div`
  display: flex;
  height: 600px;
  flex-direction: column;
  justify-content: left;
`;

const Form = styled.form`
  display: flex;
  position: relative;
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

const RecommendText = styled.text`
  font-size: 10px;
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
  height: 25px;
  width: 200px;
  color: #4d8eff;
  padding: 0;
  outline: none;
`;

const Goal = styled.div`
  display: flex;
  justify-content: left;
`;

const GoalText = styled.text`
  width: 100px;
  color: #4d8eff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const TaskBox = styled.div`
  display: flex;
  gap: 10px;
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

  const username = "test"; // do auth user later

  const onChange = (e) => {
    setPrompt(e.target.value);
  };
  const onSubmit = async (e) => {
    if (isLoading || prompt === "" || prompt.length > 180) return;
    e.preventDefault();
    if (!isChatting) setIsChatting(true);
    try {
      setLoading(true);
      setChats((chats) => [...chats, { talker: "human", message: prompt }]);
      fetchChat(prompt);
    } catch (e) {
      console.log(e);
    } finally {
      setPrompt("");
      setLoading(false);
    }
  };
  const fetchChat = async (message) => {
    try {
      const data = { message: message };
      const res = await fetch(`/api/todolist/chatbot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
    } catch (e) {
      console.log(e);
    } finally {
      const response = {
        talker: "bot",
        message: result.data,
      };
      setChats((chats) => [...chats, response]);
    }
  };
  const fetchTodo = async () => {
    try {
      const res = await fetch(`/api/todolist`);
      const result = await res.json();
      setGoal(result.data);
      setTodos(goal.todos);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setChats([
      {
        talker: "test",
        message: "🔥 불과 맞서 싸우는 소방관이 되고 싶어요!",
      },
      { talker: "bot", message: "소방관이 되려면 어떻게 해야할까요?" },
    ]);
    setTodos([
      {
        id: 1,
        todo: "something to do 1",
        completed: true,
      },
      {
        id: 2,
        todo: "something to do 2",
        completed: false,
      },
      {
        id: 3,
        todo: "something to do 3",
        completed: true,
      },
      {
        id: 4,
        todo: "something to do 4",
        completed: true,
      },
      {
        id: 5,
        todo: "something to do 5",
        completed: false,
      },
      {
        id: 1,
        todo: "something to do 1",
        completed: true,
      },
      {
        id: 2,
        todo: "something to do 2",
        completed: false,
      },
      {
        id: 3,
        todo: "something to do 3",
        completed: true,
      },
      {
        id: 4,
        todo: "something to do 4",
        completed: true,
      },
      {
        id: 5,
        todo: "something to do 5",
        completed: false,
      },
      {
        id: 1,
        todo: "something to do 1",
        completed: true,
      },
      {
        id: 2,
        todo: "something to do 2",
        completed: false,
      },
      {
        id: 3,
        todo: "something to do 3",
        completed: true,
      },
      {
        id: 4,
        todo: "something to do 4",
        completed: true,
      },
      {
        id: 5,
        todo: "something to do 5",
        completed: false,
      },
      {
        id: 1,
        todo: "something to do 1",
        completed: true,
      },
      {
        id: 2,
        todo: "something to do 2",
        completed: false,
      },
      {
        id: 3,
        todo: "something to do 3",
        completed: true,
      },
      {
        id: 4,
        todo: "something to do 4",
        completed: true,
      },
      {
        id: 5,
        todo: "something to do 5",
        completed: false,
      },
      {
        id: 1,
        todo: "something to do 1",
        completed: true,
      },
      {
        id: 2,
        todo: "something to do 2",
        completed: false,
      },
      {
        id: 3,
        todo: "something to do 3",
        completed: true,
      },
      {
        id: 4,
        todo: "something to do 4",
        completed: true,
      },
      {
        id: 5,
        todo: "something to do 5",
        completed: false,
      },
      {
        id: 1,
        todo: "something to do 1",
        completed: true,
      },
      {
        id: 2,
        todo: "something to do 2",
        completed: false,
      },
      {
        id: 3,
        todo: "something to do 3",
        completed: true,
      },
      {
        id: 4,
        todo: "something to do 4",
        completed: true,
      },
      {
        id: 5,
        todo: "something to do 5",
        completed: false,
      },
    ]);
    // dummy data
    fetchTodo();
  }, []);
  return (
    <Wrapper>
      <Main>
        <Todo>
          <Goal>
            <GoalText>목표: ~</GoalText>
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
