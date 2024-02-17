import React, { useState, useEffect } from "react";
import * as S from "./style.js";
import back from "../../assets/back.svg";

const Toast = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleBackClick = () => {
    setIsVisible(false);
  };

  useEffect(() => {}, [isVisible]);

  return (
    <S.Container isVisible={isVisible}>
      <S.Text>6행 수량을 확인해 주세요</S.Text>
      <S.Back src={back} onClick={handleBackClick} />
    </S.Container>
  );
};

export default Toast;
