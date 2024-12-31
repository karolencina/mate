"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Text from "@/components/Text";
import styles from "./index.module.css";
import clx from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentPath = pathname.split("/")[1];
  const activeRoute = currentPath || "home";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (route: string) => {
    router.push(`/${route}`);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Button onClick={toggleModal} className={styles.iconInfo}>
        <Icon name="question_mark" />
      </Button>
      <nav className={styles.navbar}>
        <Button className={styles.toggleButton} onClick={toggleMenu}>
          <div className={styles.info}></div>
          <Icon
            name="chevron"
            className={clx(
              styles.chevron,
              isOpen ? styles.right : "styles.rigt"
            )}
          />
        </Button>
        <div className={clx(styles.menu, isOpen ? styles.open : styles.closed)}>
          <div className={styles.nav}></div>
          <Button
            fontSize="1rem"
            className={styles.menuButton}
            onClick={() => handleNavigation("home")}
          >
            <Icon
              name={activeRoute === "home" ? "home_active" : "home_inactive"}
              className={styles.icon}
            />
          </Button>
          <Button
            fontSize="1rem"
            className={styles.menuButton}
            onClick={() => handleNavigation("settings")}
          >
            <Icon
              name={
                activeRoute === "settings"
                  ? "settings_active"
                  : "settings_inactive"
              }
              className={styles.icon}
            />
          </Button>
        </div>
      </nav>
      <Modal isVisible={isModalVisible} onClose={toggleModal}>
        <Text style={{ marginBottom: "3em" }}>
          If you&apos;re not Mathias, ignore. If you&apos;re Mathias, read on.
        </Text>
        <Text>
          Hi Matesito. If it&apos;s you reading this, I&apos;ve been working on
          this project for about 9 months (basically pregnancy). It started as
          an android project - I looked up how easy it was to publish android
          apps on Google Play and found out that I basically didn&apos;t need
          much, just pay a tenner and have the app pass the security. So I
          started developing it in React Native. I was this 🤏 close to
          publishing it. Little did I know. After the app was developed, I
          uploaded it to their platform just to find out that the most recent
          requirement is having 20 testers, testing the app for 14 consecutive
          days. Obv, impossible for a solo mini smol dev. So I decided to make a
          web version of it. I love you and I hope you can see yourself in the M
          character. I love you.
        </Text>
      </Modal>
    </>
  );
};

export default Navbar;
