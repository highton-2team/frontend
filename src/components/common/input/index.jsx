import React, { useState } from "react";
import { InputContainer, InputStyle, Message } from "./style";
import { Close } from "@mui/icons-material";

const Input = ({ placeholder, removeButton, value, setValue }) => {
  const [state, setState] = useState("disabled");
  const focusEvent = () => {
    setState("enabled");
  };
  const onBlur = () => {
    setState("disabled");
  };
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <InputContainer state={state}>
        <Message show={state === "enabled" || value !== ""} state={state}>
          {placeholder}
        </Message>
        <InputStyle
          type="text"
          placeholder={state === "disabled" && placeholder}
          onFocus={focusEvent}
          onBlur={onBlur}
          value={value}
          onChange={changeValue}
        />
        {removeButton && (
          <span onClick={() => setValue("")}>
            <Close style={{ margin: 0, padding: 0 }} color="#9DA3AF" />
          </span>
        )}
      </InputContainer>
    </div>
  );
};

export default Input;
