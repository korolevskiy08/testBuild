import React, { FC } from "react";

import style from "./input.module.css";

type InputType = {
  placeholder: string;
  inputStyle?: string;
};

export const Input: FC<InputType> = ({ placeholder, inputStyle }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className={`${style.input} ${inputStyle}`}
        type="text"
      />
    </div>
  );
};
