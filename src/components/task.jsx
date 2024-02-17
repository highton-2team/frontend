import { useState } from "react";
import { Done } from "@mui/icons-material";
import styled, { css } from "styled-components";

export const CheckboxStyle = styled.div`
  display: inline-block;
  border: 1px solid #9da3af;
  border-radius: 4px;
  width: 18px;
  height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  ${({ checked }) =>
    checked &&
    css`
      background-color: #4d8eff;
    `}
`;

const ChooseLayout = styled.div`
  margin: 0;
  padding: 0;
  display: flex;

  align-items: center;
  gap: 8px;

  ${({ gap }) => css`
    & + & {
      margin-top: ${gap}px;
    }
  `}
`;

const Text = styled.div`
  width: 200px;
  font-size: 14px;
`;

export default function Task({ id, todo, completed }) {
  const [checked, setChecked] = useState(completed);
  const onClick = () => {
    updateTodo();
  };
  const updateTodo = async () => {
    try {
      const data = {
        todoId: id,
        completed: checked,
      };
      const res = await fetch(`/api/todolist/updateCompleted`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status === 200) setChecked(!checked);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ChooseLayout onClick={onClick} gap={10}>
      <CheckboxStyle checked={checked}>
        {checked && <Done fontSize="20" />}
      </CheckboxStyle>
      <Text>{todo}</Text>
    </ChooseLayout>
  );
}
