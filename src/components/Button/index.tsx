import classNames from "classnames";
import React from "react";
import style from "./style.module.scss";

type StyleTypes = "regular" | "block";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: StyleTypes;
}

const Button: React.FC<ButtonProps> = ({
  children,
  styleType = "regular",
  ...props
}) => {
  return (
    <button {...props} className={classNames(style.button, style[styleType])}>
      {children}
    </button>
  );
};

export default Button;
