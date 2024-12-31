import styles from "./index.module.css";
import clx from "classnames";
import Text from "../Text";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  fontSize?: string;
};
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  fontSize,
}) => {
  return (
    <button className={clx(styles.button, className)} onClick={onClick}>
      <Text className={styles.text} style={{ fontSize }}>
        {children}
      </Text>
    </button>
  );
};

export default Button;
