import React, { FC, HTMLProps } from "react";
import styles from "./styles/KeyButton.module.css";

export const KeyButton: FC<
  { char: string; clickEvent: () => void; hiddenMode: boolean; pressed: boolean } & HTMLProps<HTMLDivElement>
> = ({ char, clickEvent, hiddenMode, pressed, ...props }) => {
  return (
    <div
      aria-hidden
      onClick={() => {
        clickEvent();
      }}
      {...props}
      className={styles.KeyButton + ` ${pressed && styles.KeyButton_active} ` + props.className}
    >
      <span className={`${hiddenMode && styles.KeyButton_hidden}`} dangerouslySetInnerHTML={{ __html: char }} />
      <span className={styles.KeyButton__dote + ` ${!hiddenMode && styles.KeyButton_hidden}`}>•</span>
    </div>
  );
};
