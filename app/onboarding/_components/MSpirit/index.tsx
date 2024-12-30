import Text from "@/components/Text";
import styles from "./index.module.css";
import React from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Image from "next/image";
import "../../../../public/images/pyramids.png";
import clx from "classnames";

type MSpiritProps = {
  onPrevious: () => void;
  onNext: () => void;
};

const MSpirit = ({ onPrevious, onNext }: MSpiritProps) => {
  return (
    <div className={styles.page}>
      <div className={styles["img-container"]}>
        <Image
          src={"/images/pyramids.png"}
          alt={"Smoke"}
          className={styles.img}
          width={2280}
          height={1200}
        ></Image>
      </div>
      <div className={styles["top-text"]}>
        <Text>
          M. is no spectre from a distant legend, but a quiet spirit dwelling in
          the mate cup. He won't fulfill your wishes but will reveal strange
          wonders. He's free to leave but chooses to stay, so what would he wish
          for in return? He doesn't ask for much…
        </Text>
        <Text className={clx(styles["text-right"], styles["text-secondary"])}>
          (…maybe just components to build a high-end gaming PC, a plate of
          facturas, or a Vintera® II '50s Jazzmaster®)
        </Text>
      </div>
      <div className={styles["bottom-text"]}>
        <Text className={styles["text-left"]}>
          He waits with eternal patience to be summoned only by the curious
          mind, ready to reveal the wonders he conceals. What will you ask of
          him today?
        </Text>
      </div>
      <div className={styles["button-container"]}>
        <Button onClick={onPrevious}>
          <Icon name="arrow" alt="Question Mark" className={styles.prev} />
        </Button>
        <Button onClick={onNext}>
          <Icon name="arrow" alt="Question Mark" />
        </Button>
      </div>
    </div>
  );
};

export default MSpirit;
