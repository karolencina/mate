import React from "react";
import { azeretMono, pixelifySans } from "@/fonts";
import clx from "classnames";
import "@styles/fonts.css";
import styles from "./index.module.css";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

const Text: React.FC<TextProps> = ({ children, className }) => {
  const pixelLetters = new Set([
    "B",
    "b",
    "D",
    "d",
    "M",
    "m",
    "O",
    "o",
    "P",
    "p",
    "Q",
    "q",
    "S",
    "s",
    "V",
    "v",
    "W",
    "w",
    "(",
    ")",
    "?",
  ]);

  const processNode = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return node
        .toUpperCase()
        .split("")
        .map((char, index) => (
          <span
            key={index}
            className={
              pixelLetters.has(char)
                ? clx(pixelifySans.className, "pixelify-sans")
                : clx(azeretMono.className, "azeret-mono")
            }
          >
            {char}
          </span>
        ));
    }

    if (React.isValidElement(node)) {
      const props = node.props as { children?: React.ReactNode };
      return React.cloneElement(node, {
        ...props,
        // @ts-ignore
        children: React.Children.map(props.children, processNode),
      });
    }

    return node;
  };

  return (
    <span className={clx("font-common", className, styles.text)}>
      {React.Children.map(children, processNode)}
    </span>
  );
};

export default Text;
