import React, { FC, useMemo } from "react";
import styles from "./styles/InputHelper.module.css";
import { useKeyWatcher } from "../../hooks/useKeyWatcher";
import { inputHelperSymbols } from "./inputHelperSymbols";

const KeyButton: FC<{ char: string; clickEvent: () => void; hiddenMode: boolean; pressed: boolean }> = ({
  char,
  clickEvent,
  hiddenMode,
  pressed,
}) => {
  return (
    <button
      role={"presentation"}
      onClick={() => clickEvent()}
      className={styles.InputHelper__element + ` ${pressed && styles.InputHelper__element_active}`}
    >
      <span className={`${hiddenMode && styles.InputHelper__hidden}`}>{char}</span>
      <span className={styles.InputHelper__dote + ` ${!hiddenMode && styles.InputHelper__hidden}`}>•</span>
    </button>
  );
};

export const InputHelper: FC<{ callback: (chooseChar: string) => void; hiddenMode: boolean }> = ({
  callback,
  hiddenMode,
}) => {
  const keyboard = useKeyWatcher();
  const clickEvent = (char: string) => {
    return callback(char);
  };

  return (
    <div className={styles.InputHelper}>
      <div className={styles.InputHelper__container}>
        {inputHelperSymbols.map((el, i) => (
          <KeyButton
            char={el}
            pressed={el.toLowerCase() === keyboard.toLowerCase()}
            key={el + i}
            hiddenMode={hiddenMode}
            clickEvent={() => clickEvent(el)}
          />
        ))}
      </div>
    </div>
  );
};
