import React from "react";
import Image from "next/image";
import clx from "classnames";
import styles from "./index.module.css";
import x from "../icons/x.png";
import question_mark from "../icons/question_mark.png";
import home_inactive from "../icons/home_inactive.png";
import home_active from "../icons/home_active.png";
import settings_inactive from "../icons/settings_inactive.png";
import settings_active from "../icons/settings_active.png";
import chevron from "../icons/chevron.png";
import arrow from "../icons/arrow.png";

interface IconProps {
  name:
    | "x"
    | "chevron"
    | "arrow"
    | "question_mark"
    | "home_inactive"
    | "home_active"
    | "settings_inactive"
    | "settings_active";
  alt?: string;
  className?: string;
}

const icons = {
  x,
  question_mark,
  chevron,
  arrow,
  home_inactive,
  home_active,
  settings_inactive,
  settings_active,
};

const Icon: React.FC<IconProps> = ({ name, alt = "", className }) => {
  const iconSrc = icons[name];
  return (
    <div className={styles["icon-container"]}>
      <Image src={iconSrc} alt={alt} className={clx(styles.icon, className)} />
    </div>
  );
};

export default Icon;
