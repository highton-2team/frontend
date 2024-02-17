import React, { useState } from "react";
import {
  AsideList,
  AsideListItem,
  AsideListTitle,
  AsideStyle,
  AsideTitle,
  PlusButton,
} from "./style";

const Aside = () => {
  const [clicked, setClicked] = useState(1);

  return (
    <AsideStyle>
      <AsideTitle>목록</AsideTitle>
      <AsideList>
        <div>
          <AsideListTitle>다음주</AsideListTitle>
          <AsideListItem clicked={true}>
            <span>소방관 되기</span>
            <PlusButton>+</PlusButton>
          </AsideListItem>
        </div>
        <div>
          <AsideListTitle>다음주</AsideListTitle>
          <AsideListItem>소방관 되기</AsideListItem>
        </div>
      </AsideList>
    </AsideStyle>
  );
};

export default Aside;
