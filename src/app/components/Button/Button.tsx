"use client";

import { IProps } from "./Interface";

const Button = ({ onClick, children, className }: IProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
