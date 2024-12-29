import styles from "./index.module.css";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Text from "@/components/Text";

type WhoIsMateProps = {
  onNext: () => void;
};

const WhoIsMate = ({ onNext }: WhoIsMateProps) => {
  return (
    <div className={styles.page}>
      <h1>
        <Text>
          Who is Mate <span>[mah-teh]</span>
        </Text>
      </h1>
      <Button onClick={onNext}>
        <Icon name="arrow" alt="Arrow" />
      </Button>
    </div>
  );
};

export default WhoIsMate;
