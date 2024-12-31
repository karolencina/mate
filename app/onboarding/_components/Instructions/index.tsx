import Text from "@/components/Text";
import styles from "./index.module.css";
import React from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Image from "next/image";
import "../../../../public/images/smoke.png";

type InstructionsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

const Instructions = ({ onPrevious, onNext }: InstructionsProps) => {
  return (
    <div className={styles.page}>
      <div className={styles["img-container"]}>
        <Image
          src={"/images/stars.png"}
          alt={"Smoke"}
          className={styles.img}
          width={2280}
          height={1200}
        ></Image>
      </div>
      <div className={styles["top-text"]}>
        <Text>The curious can rub the mate and summon M by doing so.</Text>
      </div>
      <div className={styles["bottom-text"]}>
        <Text>
          Be careful though! There are few things in this world less terrible
          than stirring the yerba inside the mate with a straw.
        </Text>
      </div>
      <div className={styles["button-container"]}>
        <Button onClick={onPrevious}>
          <Icon name="arrow" alt="Question Mark" className={styles.prev} />
        </Button>
        <Button onClick={onNext} fontSize="1.2rem">
          See Mate
        </Button>
      </div>
    </div>
  );
};

export default Instructions;
