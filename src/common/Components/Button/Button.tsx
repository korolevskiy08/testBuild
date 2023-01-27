import React, {
  FC,
  ReactNode,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";

import style from "./button.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonType = DefaultButtonPropsType & {
  onclick: () => void;
  styleButton?: any;
  children: ReactNode;
};

export const Button: FC<ButtonType> = ({
  onclick,
  children,
  styleButton,
  ...restProps
}) => {
  const onclickHandler = (): void => {
    onclick();
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={onclickHandler}
      className={`${style.button} ${styleButton}`}
      {...restProps}
    >
      {children}
    </button>
  );
};
