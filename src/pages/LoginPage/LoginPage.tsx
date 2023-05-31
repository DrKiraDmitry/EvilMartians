import React from "react";
import styles from "./styles/LoginPage.module.css"
import {InputHelper} from "../../components/InputHelper/InputHelper";
import {LoginForm} from "../../components/LoginForm/LoginForm";

export const LoginPage =() => {
    return <div className={styles.LoginPage}>
        <InputHelper />
        <LoginForm />
    </div>
}