import React from "react";
import styles from "./index.module.css";
import clx from "classnames";
import Text from "../Text";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={clx(styles.button, className)} onClick={onClick}>
      <Text>{children}</Text>
    </button>
  );
};

export default Button;
