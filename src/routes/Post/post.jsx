import * as S from "./style.js";
import { useNavigate } from "react-router-dom";

const Post = () => {
  return (
    <>
      <S.Container>
        <S.TextBox>
          <S.TitleBox>
            <S.Title>
              이틀 전에 소방관 시험을 봤는데 갈 때 먹은 컵라면이 정말정말
              맛있었습니다.
            </S.Title>
            <S.SubTitle>2일 전</S.SubTitle>
          </S.TitleBox>

          <S.Content>
            ㅇㅇㄹㄴㅇ루ㅏ아러댜움ㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㅇㅁㅇㅁㄴㅇㅁㄴㄴㅁㅇㄴㅁㅇㅁㅇㅁㄴㅇㅁㄴㅇ몸널머ㅏㅡㄴㅇㅁ랴ㅓㅣ우ㅏ냐ㅓ우ㅡㅁㄴㅍ차ㅓ탸너로ㅓㅜ을ㅇ,ㄴ피ㅏ챠ㅐ펴노러뷰우ㅡ,ㅁㄴ피ㅏㅐ탸ㅕ초넝류브ㅜ,ㄹㅁㅇ니파ㅑㅐㅕㅓ놔루브,ㄹ미ㅏㅇㄴ퍄태ㅕㅗ너룾드,ㅡ니앞류야ㅐㅓ나ㅜㄷㄹ즉ㅂ,ㄷ리아내ㅓㅑㅇ눌즏,ㅣㄴ알유ㅐㅓㅑㅗ훚ㄷ를,ㅣㅇ널야ㅠ로ㅜㅠ늗ㄹ
            ㅈ,ㅡㄴ이퍼류ㅗㅇㄹ누ㅡㄷㄹㅈㅂ,ㅣㅇ너ㅏ류야ㅗㅜ늘ㄷㅈ,ㅢㅓㄴㅇㅍ래ㅠㅕㅑㅗㅓㅇㄹ늘뒁ㄴ패ㅕㅑㅗㅓㄴ유루ㅡㅂ,ㅢ랑냐ㅐㅕㅠ랴ㅓㅘ너ㅜ을ㄷㅂ,ㅡ리ㅓㅇ내ㅕ류ㅑㅘㄴ우릐ㅏ먕내ㅓㅏ
            ㅓㅜㅡㅁ아너ㅏㅜ믕,ㄴ리ㅏ퍼ㅏ우르,ㅁㄹㄴ이팣터ㅠ포ㅜ능ㄹ
            ㅁ,ㅡㄴ이ㅏㅍ튜ㅓㅜㄹ능ㄹ ,믱나류ㅓㅜ은ㄹ
            ㅁ,ㅢ안퍼ㅠ투ㅡㄴㅇㄹ,ㅣㅏ류ㅓㅇ루ㅡㄴㄹ,ㅣㅍ러ㅠ아루ㅡㄴㄹ,ㅣㅍ류어ㅏㅜㅡㄴㄹ,ㅍ러ㅏ유ㅜㅡㄴ,퍼ㅜㄹㅇ나ㅓ누ㅡ라펓토ㅜㄴ읊ㅊ터ㅏㄴ우릎ㅌ처
            ㅜㅡㅁㅇㄴ,ㅣㅏㅓ눔능리ㅏ퍼울믄,ㅇ피ㅏㅓ우름,ㄴㅇ피ㅏㅌ처누읆,ㅣ파ㅓㅡㅜㅇㄹ,ㅣㅏㅓㄷ
          </S.Content>
        </S.TextBox>
        <S.TitleInput />
        <S.CommentBox>
          <S.Comment>
            댓글 <S.Number>8</S.Number>
          </S.Comment>
          <S.Comment1>
            <S.Box>
              <S.Name>닉네임 입니다</S.Name>
              <S.Date>2023년 7월 19일 17:34</S.Date>
            </S.Box>
            <S.CommentContent>와우 굿굿입니다 정말 최고</S.CommentContent>
          </S.Comment1>
          <S.Answer>
            <S.AnswerTitle>답글</S.AnswerTitle>
            <S.Comment2>
              <S.Box>
                <S.Name>닉네임 인데용</S.Name>
                <S.Date>2023년 7월 19일 17:34</S.Date>
              </S.Box>
              <S.CommentContent>
                와 너무 좋네여 꿀팁 감사합니다
              </S.CommentContent>
            </S.Comment2>
          </S.Answer>
        </S.CommentBox>
      </S.Container>
    </>
  );
};

export default Post;
