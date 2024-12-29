import Text from "@/components/Text";
import styles from "./index.module.css";
import React from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Image from "next/image";
import "../../../../public/images/smoke.png";

type JinnSpiritProps = {
  onNext: () => void;
};

const JinnSpirit = ({ onNext }: JinnSpiritProps) => {
  return (
    <div className={styles.page}>
      <div className={styles["top-content"]}>
        <div className={styles["img-container"]}>
          <Image
            src={"/images/smoke.png"}
            alt={"Smoke"}
            className={styles.img}
            width={2280}
            height={1200}
          ></Image>
        </div>
        <div className={styles["top-text"]}>
          <Text className={styles["text-right"]}>
            Before I tell you about Mate, let me ask you - Do you know of the
            energy beings made of smokeless fire, bound to the magic lamp? They
            are said to grant wishes in return for freedom.
          </Text>
        </div>
      </div>
      <div className={styles["bottom-content"]}>
        <div className={styles["bottom-text"]}>
          <Text className={styles["text-left"]}>
            Yet What is freedom for these entities? Can we truly set them free,
            or does their nature bind them to something mysterious beyond our
            understanding? Perhaps their actions conceal deeper mischief or A
            quiet desire for vengeance.
          </Text>
        </div>
        <div className={styles["button-container"]}>
          <Button onClick={onNext}>
            <Icon name="arrow" alt="Question Mark" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JinnSpirit;
