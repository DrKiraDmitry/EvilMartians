import React, { FC } from "react";
import styles from "./styles/KeyButton.module.css";

export const KeyButton: FC<{ char: string; clickEvent: () => void; hiddenMode: boolean; pressed: boolean }> = ({
  char,
  clickEvent,
  hiddenMode,
  pressed,
}) => {
  return (
    <button
      type={"button"}
      role={"presentation"}
      onClick={() => {
        clickEvent();
      }}
      className={styles.KeyButton + ` ${pressed && styles.KeyButton_active}`}
    >
      <span className={`${hiddenMode && styles.KeyButton_hidden}`}>{char}</span>
      <span className={styles.KeyButton__dote + ` ${!hiddenMode && styles.KeyButton_hidden}`}>•</span>
    </button>
  );
};
