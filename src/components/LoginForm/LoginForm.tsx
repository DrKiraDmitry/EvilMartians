import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./styles/LoginForm.module.css";

export const ErrorBox = () => {
  return (
    <div className={styles.ErrorBox}>
      <div className={styles.ErrorBox__element}></div>
    </div>
  );
};

type inputProps = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

type LoginFormProps = {
  mail: inputProps;
  password: inputProps;
  setHiddenMode: (type: boolean) => void;
};

export const LoginForm: FC<LoginFormProps> = ({ mail, password, setHiddenMode }) => {
  return (
    <div className={styles.LoginForm}>
      <form className={styles.LoginForm__form}>
        <h1 className={styles.LoginForm__title}>Sign in</h1>
        <label className={styles.LoginForm__label}>
          <input
            onChange={(e) => mail.setState(e.target.value)}
            value={mail.state}
            type="email"
            autoComplete="username"
            required
            aria-invalid="true"
            aria-errormessage="email-error"
            onFocus={() => setHiddenMode(false)}
          />
        </label>
        <label className={styles.LoginForm__label}>
          <input
            onChange={(e) => password.setState(e.target.value)}
            value={password.state}
            type="password"
            autoComplete="current-password"
            required
            aria-invalid="true"
            aria-errormessage="password-error"
            minLength={4}
            onFocus={() => setHiddenMode(true)}
          />
        </label>
        <div className={styles.LoginForm__footer}>
          <button className={styles.LoginForm__button_success}>Accept</button>
          <a href={"/forget"} className={styles.LoginForm__button_forget}>
            Forget
          </a>
        </div>
      </form>
    </div>
  );
};
