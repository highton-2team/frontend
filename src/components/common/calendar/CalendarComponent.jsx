import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const DateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1260px;
`;
const DateStyle = styled.div`
  display: flex;
  width: 180px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #0f0f0f;
  background-color: white;

  &:first-child {
    color: #9da3af;
  }
  &:last-child {
    color: #9da3af;
  }
`;
const Dates = styled.div`
  width: 180px;
  height: 180px;
  padding: 16px 147px 144px 16px;
  color: #0f0f0f;

  ${({ gray }) =>
    gray &&
    css`
      color: #9da3af;
    `}
`;

const CalendarComponent = () => {
  const [startDate, setStartDate] = useState();

  const month = dayjs().month();
  const year = dayjs().year();

  useEffect(() => {
    setStartDate(Number(dayjs(`${year}-${month + 1}-01`).format("d")));
  }, []);
  return (
    <div>
      <DateContainer>
        {["일", "월", "화", "수", "목", "금", "토"].map((v) => (
          <DateStyle>{v}</DateStyle>
        ))}
      </DateContainer>
      <DateContainer>
        {new Array(startDate).fill(0).map((v, index) => (
          <Dates gray>
            {dayjs(`${year}-${month}-1`).daysInMonth() - (startDate - index)}
          </Dates>
        ))}
        {new Array(dayjs().daysInMonth()).fill(0).map((v, index) => (
          <Dates
            gray={
              (startDate + index) % 7 === 6 || (startDate + index) % 7 === 0
            }
          >
            {index + 1}
          </Dates>
        ))}
      </DateContainer>
    </div>
  );
};

export default CalendarComponent;
