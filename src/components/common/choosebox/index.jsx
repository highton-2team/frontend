import { Done } from "@mui/icons-material";
import React from "react";
import { CheckboxStyle, ChooseLayout, RadioStyle } from "./style";

const ChooseBox = ({ type, list, clickEvent, name, gap }) => {
  if (type === "radio") {
    return (
      <>
        {list.map(({ checked, value }) => (
          <ChooseLayout onClick={clickEvent} gap={gap}>
            <RadioStyle checked={checked} type="radio" name={name} />
            <label>{value}</label>
          </ChooseLayout>
        ))}
      </>
    );
  }
  if (type === "checkbox") {
    return (
      <>
        {list.map(({ checked, value }) => (
          <ChooseLayout onClick={clickEvent} gap={gap}>
            <CheckboxStyle checked={checked}>
              {checked && <Done fontSize="20" />}
            </CheckboxStyle>
            <label>{value}</label>
          </ChooseLayout>
        ))}
      </>
    );
  }
};

export default ChooseBox;
