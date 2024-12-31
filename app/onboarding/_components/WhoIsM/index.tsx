import styles from "./index.module.css";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Text from "@/components/Text";
import clx from "classnames";

type WhoIsMProps = {
  onPrevious: () => void;
  onNext: () => void;
};

const WhoIsM = ({ onPrevious, onNext }: WhoIsMProps) => {
  return (
    <div className={styles.page}>
      <Button
        fontSize="2rem"
        onClick={onPrevious}
        className={clx(styles.btn, styles.mate)}
      >
        What is <span className={styles["text-blue"]}>Mate</span>?
      </Button>
      <Button
        fontSize="2rem"
        onClick={onNext}
        className={clx(styles.btn, styles.m)}
      >
        Who is M?
      </Button>
    </div>
  );
};

export default WhoIsM;
