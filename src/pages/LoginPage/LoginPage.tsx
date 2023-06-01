import React, { useState } from "react";
import styles from "./styles/LoginPage.module.css";
import { InputHelper } from "../../components/InputHelper/InputHelper";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { usePlatformCheck } from "../../hooks/usePlatformCheck";
import { useSendForm } from "../../hooks/api/useSendForm/useSendForm";

export const LoginPage = () => {
  const { password, setPassword, email, setEmail, sendForm, disabledSend } = useSendForm();
  const isPc = usePlatformCheck("pc");
  const [hiddenMode, setHiddenMode] = useState(true);
  const [activeFocus, setActiveFocus] = useState(false);

  const inputHelperCallback = (char: string) => {
    if (!activeFocus) return;

    const plus = (a: string, b: string) => a + b;
    const minus = (a: string) => a.slice(0, -1);
    const isBackspace = (a: string, b: string) => ("Backspace" === char ? minus(a) : plus(a, b));

    if (hiddenMode) return setPassword((prev) => isBackspace(prev, char));

    return setEmail((prev) => isBackspace(prev, char));
  };

  return (
    <div className={styles.LoginPage}>
      {isPc && <InputHelper hiddenMode={hiddenMode} callback={(x) => inputHelperCallback(x)} />}
      <LoginForm
        disabledSend={disabledSend}
        sendForm={() => sendForm()}
        setActiveFocus={(x) => setActiveFocus(x)}
        setHiddenMode={(x) => setHiddenMode(x)}
        email={{ state: email, setState: (x) => setEmail(x) }}
        password={{ state: password, setState: (x) => setPassword(x) }}
      />
    </div>
  );
};
