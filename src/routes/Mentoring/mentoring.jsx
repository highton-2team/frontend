import * as S from "./style.js";
import data from "./data.json";
import Layout from "../../components/layout.jsx";
import { useNavigate } from "react-router-dom";

const Mentoring = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout />
      <S.Container>
        <S.Aside>
          <S.AsideTitle>목록</S.AsideTitle>
          <S.AsideItem>소방관 되기</S.AsideItem>
          <S.AsideItem>UX/UI 디자이너 되기</S.AsideItem>
          <S.AsideItem>프론트엔드 개발자 되기</S.AsideItem>
          <S.AsideItem>안드로이드 개발자 되기</S.AsideItem>
          <S.AsideItem>IOS 개발자 되기</S.AsideItem>
          <S.AddButton>새 꿈 계획하기 +</S.AddButton>
        </S.Aside>
      </S.Container>
      <S.Main>
        <S.MainContent>
          성공과 실패를 겪어본 선배님들의 조언을 들어보세요!
        </S.MainContent>
        <S.SubContent>"소방관"</S.SubContent>
        <S.WriteBtn onClick={() => navigate("/write")}>글 작성하기</S.WriteBtn>
        <S.PostBox>
          {data.map((item, index) => {
            return (
              <>
                <S.Post onClick={() => navigate("/post")} key={index}>
                  ;
                  <S.PostContent>
                    <S.PostTitle>{item.title}</S.PostTitle>
                    <S.PostSubTitle>{item.subtitle}</S.PostSubTitle>
                    <S.Box>
                      <S.PostDate>{item.date}</S.PostDate>
                      <S.Content>{item.Content}</S.Content>
                    </S.Box>
                    <S.PostTag>{item.tag}</S.PostTag>
                  </S.PostContent>
                </S.Post>
              </>
            );
          })}
          ;x
        </S.PostBox>
      </S.Main>
    </>
  );
};

export default Mentoring;
