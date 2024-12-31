"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import styles from "./index.module.css";
import clx from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname(); // Dynamically get the current pathname

  const currentPath = pathname.split("/")[1]; // Extract the first part of the path
  const activeRoute = currentPath || "home"; // Default to "home" if no path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (route: string) => {
    router.push(`/${route}`);
  };

  return (
    <nav className={styles.navbar}>
      <Button className={styles.toggleButton} onClick={toggleMenu}>
        <Icon
          name="chevron"
          className={clx(styles.chevron, isOpen ? "" : styles.left)}
        />
      </Button>
      <div className={clx(styles.menu, isOpen ? styles.open : styles.closed)}>
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
  );
};

export default Navbar;
