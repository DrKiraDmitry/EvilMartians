import React, { FC, InputHTMLAttributes } from "react";
import styles from "./styles/Input.module.css";

export const Input: FC<InputHTMLAttributes<any>> = ({ ...props }) => {
  return (
    <label className={styles.Input__label}>
      <input className={styles.Input} {...props} />
    </label>
  );
};
