import React from "react";
import style from "./style.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
