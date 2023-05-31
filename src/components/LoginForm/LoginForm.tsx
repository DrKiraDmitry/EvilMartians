import React from "react";
import styles from "./styles/LoginForm.module.css";

export const ErrorBox = () => {
  return (
    <div className={styles.ErrorBox}>
      <div className={styles.ErrorBox__element}></div>
    </div>
  );
};

export const LoginForm = () => {
  return (
    <div className={styles.LoginForm}>
      <h1>Sign in</h1>
      <form>
        <label>
          <input type="email" autoComplete="username" />
          <ErrorBox />
        </label>
        <label>
          <input type="password" autoComplete="current-password" />
          <ErrorBox />
        </label>
      </form>
      <div className={styles.LoginForm__footer}>
        <button className={styles.LoginForm__button_success}>Accept</button>
        <button className={styles.LoginForm__button_forget}>Forget</button>
      </div>
    </div>
  );
};
