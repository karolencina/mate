import React from "react";
import { azeretMono, pixelifySans } from "@/fonts";
import clx from "classnames";
import "@styles/fonts.css";

const pixelLetters = new Set(["B", "D", "M", "N", "O", "P", "S", "V", "W"]);

type TextProps = {
  children: string;
  className?: string;
};

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <span className={clx("font-common", className)}>
      {children.split("").map((char, index) => (
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
      ))}
    </span>
  );
};

export default Text;
