import Text from "@/components/Text";
import styles from "./index.module.css";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Image from "next/image";
import clx from "classnames";

type MateTraditionProps = {
  onNext: () => void;
};

const MateTradition = ({ onNext }: MateTraditionProps) => {
  return (
    <div className={styles.page}>
      <div className={styles["img-container"]}>
        <Image
          src={"/images/love_steam.png"}
          alt={"Smoke"}
          className={styles.img}
          width={2280}
          height={1200}
        ></Image>
      </div>

      <div className={styles["top-text"]}>
        <Text>
          Beyond seven seas and seven mountains, there is a place full of lovely
          people. Here, a ceremony exists - friends, families, and even
          strangers meet up to share something that unites them: the mate.
        </Text>
      </div>
      <div className={styles["bottom-text"]}>
        <Text className={styles["text-left"]}>
          They sit, talk, take a couple of sips from the gourd, and pass it on
          to the friend next to them.
        </Text>
      </div>
      <div className={styles["button-container"]}>
        <Button onClick={onNext}>
          <Icon name="arrow" alt="Question Mark" />
        </Button>
      </div>
    </div>
  );
};

export default MateTradition;
