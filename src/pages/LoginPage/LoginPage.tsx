import React, { useState } from "react";
import styles from "./styles/LoginPage.module.css";
import { InputHelper } from "../../components/InputHelper/InputHelper";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { usePlatformCheck } from "../../hooks/usePlatformCheck";

export const LoginPage = () => {
  const isPc = usePlatformCheck("pc");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenMode, setHiddenMode] = useState(true);
  const [activeFocus, setActiveFocus] = useState(false);

  const inputHelperCallback = (char: string) => {
    if (!activeFocus) return;
    if (hiddenMode) return setPassword((prev) => prev + char);
    return setMail((prev) => prev + char);
  };

  return (
    <div className={styles.LoginPage}>
      {isPc && <InputHelper hiddenMode={hiddenMode} callback={(x) => inputHelperCallback(x)} />}
      <LoginForm
        setActiveFocus={(x) => setActiveFocus(x)}
        setHiddenMode={(x) => setHiddenMode(x)}
        mail={{ state: mail, setState: (x) => setMail(x) }}
        password={{ state: password, setState: (x) => setPassword(x) }}
      />
    </div>
  );
};
