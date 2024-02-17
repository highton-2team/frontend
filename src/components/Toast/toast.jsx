import React, { useState, useEffect } from "react";
import * as S from "./style.js";
import back from "../../assets/back.svg";

const Toast = ({ title }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleBackClick = () => {
    setIsVisible(false);
  };

  useEffect(() => {}, [isVisible]);

  return (
    <S.Container>
      <S.Text>{title}</S.Text>
      <S.Back src={back} onClick={handleBackClick} />
    </S.Container>
  );
};

export default Toast;
