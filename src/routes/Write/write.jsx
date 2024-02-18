import * as S from "./style.js";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const Post = () => {
    axios
      .post("/api/posts/create", {
        title: Title,
        content: Content,
      })
      .then((response) => {
        console.log(response);
        goHome();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <S.Container>
        <S.Title>글 작성</S.Title>
        <S.TitleInput
          placeholder="제목"
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Content
          placeholder="내용"
          name="content"
          type="text"
          onChange={(e) => setContent(e.target.value)}
        />
        <S.Button
          onClick={() => {
            Post();
            navigate("/Mentoring");
          }}
        >
          글 작성하기
        </S.Button>
      </S.Container>
    </>
  );
};

export default Write;
