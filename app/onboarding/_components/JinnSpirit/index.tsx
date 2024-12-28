import Text from "@/components/Text";
import styles from "./index.module.css";

type JinnSpiritProps = {
  onNext: () => void;
};

const JinnSpirit = ({ onNext }: JinnSpiritProps) => {
  return (
    <div className={styles.page}>
      <h1>
        <Text>Jinn Spirit</Text>
      </h1>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default JinnSpirit;
