import Text from "@components/Text";
import styles from "./index.module.css";

const MobileMessage = () => {
  return (
    <div className={styles["mobile-message"]}>
      <Text>M. is not ready to appear on a mobile device :(</Text>
      <Text>Try desktop?</Text>
    </div>
  );
};

export default MobileMessage;
