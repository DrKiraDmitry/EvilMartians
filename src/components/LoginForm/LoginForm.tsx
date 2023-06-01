import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./styles/LoginForm.module.css";
import { Input } from "../Input/Input";

type inputProps = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

type LoginFormProps = {
  email: inputProps;
  password: inputProps;
  setHiddenMode: (type: boolean) => void;
  setActiveFocus: (x: boolean) => void;
  sendForm: () => void;
  disabledSend: boolean;
};

export const LoginForm: FC<LoginFormProps> = ({
  email,
  password,
  setHiddenMode,
  setActiveFocus,
  sendForm,
  disabledSend,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendForm();
        }}
        className={styles.LoginForm__form}
      >
        <h1 className={styles.LoginForm__title}>Sign in</h1>
        <Input
          title={"Email"}
          onChange={(e) => email.setState(e.target.value)}
          value={email.state}
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
          title={"Password"}
          onChange={(e) => {
            password.setState(e.target.value);
          }}
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
          <button disabled={disabledSend} className={styles.LoginForm__button}>
            {disabledSend ? "Waiting..." : "Accept"}
          </button>
          <a href={"#"} className={styles.LoginForm__forgot}>
            Forgot your email address?
          </a>
        </div>
      </form>
    </>
  );
};
