import React, { FC } from "react";
import styles from "./styles/InputHelper.module.css";
import { useKeyWatcher } from "../../hooks/useKeyWatcher";
import { inputHelperSymbols } from "./inputHelperSymbols";
import { KeyButton } from "./KeyButton/KeyButton";

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
      <div
        className={styles.InputHelper__container}
        onMouseDown={(e) => {
          e.preventDefault(); // to keep input focus on click
        }}
      >
        {inputHelperSymbols.map((el, i) => (
          <KeyButton
            char={el}
            pressed={!!keyboard && el.toLowerCase() === keyboard.toLowerCase()}
            key={el + i}
            hiddenMode={hiddenMode}
            clickEvent={() => clickEvent(el)}
          />
        ))}
        <KeyButton
          char={"🠀"}
          pressed={!!keyboard && "Backspace".toLowerCase() === keyboard.toLowerCase()}
          key={"Backspace"}
          hiddenMode={false}
          clickEvent={() => clickEvent("Backspace")}
          className={styles.InputHelper__backspace}
        />
      </div>
    </div>
  );
};
