import React, { FC, InputHTMLAttributes } from "react";
import styles from "./styles/Input.module.css";

export const Input: FC<{ title?: string } & InputHTMLAttributes<any>> = ({ title, ...props }) => {
  return (
    <label className={styles.Input__label}>
      {title && <div className={styles.Input__title} dangerouslySetInnerHTML={{ __html: title }} />}
      <input className={styles.Input} {...props} />
    </label>
  );
};
