import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./styles/LoginForm.module.css";
import { Input } from "../Input/Input";

type inputProps = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

type LoginFormProps = {
  mail: inputProps;
  password: inputProps;
  setHiddenMode: (type: boolean) => void;
  setActiveFocus: (x: boolean) => void;
};

export const LoginForm: FC<LoginFormProps> = ({ mail, password, setHiddenMode, setActiveFocus }) => {
  return (
    <>
      <form className={styles.LoginForm__form}>
        <h1 className={styles.LoginForm__title}>Sign in</h1>
        <Input
          onChange={(e) => mail.setState(e.target.value)}
          value={mail.state}
          type="email"
          autoComplete="username"
          required
          aria-invalid="true"
          aria-errormessage="email-error"
          onFocus={() => {
            setActiveFocus(true);
            setHiddenMode(false);
          }}
          onBlur={() => {
            setActiveFocus(false);
            setHiddenMode(true);
          }}
          placeholder={"Email"}
        />
        <Input
          onChange={(e) => password.setState(e.target.value)}
          value={password.state}
          type="password"
          autoComplete="current-password"
          required
          aria-invalid="true"
          aria-errormessage="password-error"
          minLength={4}
          onFocus={() => {
            setActiveFocus(true);
            setHiddenMode(true);
          }}
          onBlur={() => setActiveFocus(false)}
          placeholder={"Password"}
        />
        <div className={styles.LoginForm__footer}>
          <button className={styles.LoginForm__button}>Accept</button>
          <a href={"/forgot"} className={styles.LoginForm__forgot}>
            Forgot your email address?
          </a>
        </div>
      </form>
    </>
  );
};
