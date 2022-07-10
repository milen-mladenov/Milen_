import { useState } from 'react';

import styles from './LoginBox.module.css'



let maximum ;
export const LoginBox = () => {
    const [password, setPassword] = useState("")
    const [passwordType, setPassType] = useState("text")
    function passwordInput(e) {
        let input = e.target.value
        if (!isNaN(input[0])) {
            setPassType("password")
        } else {
            setPassType("text")
        }

        if(passwordType == "password"){
            maximum = 6
        } else {
            maximum = 12
        }
        setPassword(input)

    }

    function clear() {
        setPassword("")
    }

    function login() {
        console.log(password);
    }


    return (
        <section id="login" className={styles.login}>
            <div id="login_screen" className={styles.login_screen}>
                <div>
                    <h2>Login:</h2>
                </div>
                <input type={passwordType} id="login_input" className={styles.login_input} maxLength={maximum} onInput={passwordInput} value={password} placeholder="******" />
                <div id="login_buttons" className={styles.login_buttons}>
                    <button id="clear_btn" onClick={clear} className={styles.clear_btn}>Clear</button>
                    <button id="login_btn" onClick={login} className={styles.login_btn}>Login</button>
                </div>
            </div>
        </section>
    )
}