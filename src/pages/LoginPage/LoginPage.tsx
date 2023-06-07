import React, { useState } from "react";
import styles from "./styles/LoginPage.module.css";
import { InputHelper } from "../../components/InputHelper/InputHelper";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { usePlatformCheck } from "../../hooks/usePlatformCheck";
import { useSendForm } from "../../hooks/api/useSendForm/useSendForm";
import { inputHelperRules } from "../../utils/inputHelperRules";

export enum ActiveFocusEnum {
  password,
  email,
  empty,
}

export const LoginPage = () => {
  const { password, setPassword, email, setEmail, sendForm, disabledSend } = useSendForm();
  const isPc = usePlatformCheck("pc");
  const [hiddenMode, setHiddenMode] = useState(true);
  const [activeFocus, setActiveFocus] = useState(ActiveFocusEnum.empty);

  const inputHelperCallback = (char: string) => {
    if (activeFocus === ActiveFocusEnum.empty) return;
    if (activeFocus === ActiveFocusEnum.password) return setPassword((prev) => inputHelperRules(prev, char));
    if (activeFocus === ActiveFocusEnum.email) return setEmail((prev) => inputHelperRules(prev, char));
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
