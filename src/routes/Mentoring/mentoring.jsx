import * as S from "./style.js";
import basic from "../../assets/basic.svg";
import data from "./data.json";
const Mentoring = () => {
  return (
    <>
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
        <S.WriteBtn>글 작성하기</S.WriteBtn>
        <S.PostBox>
          {data.map((item, index) => {
            return (
              <>
                <S.Post key={index}>
                  <S.PostImg src={basic} />
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
          ;
        </S.PostBox>
      </S.Main>
    </>
  );
};

export default Mentoring;
