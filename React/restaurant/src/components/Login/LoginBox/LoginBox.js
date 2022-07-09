import styles from './LoginBox.module.css'

export const LoginBox = () => {
    return (
        <section id="login" className={styles.login}>
        <div id="login_screen" className={styles.login_screen}>
            <div>
                <h3>Login:</h3>
            </div>
            <input type="text" id="login_input" className={styles.login_input} placeholder="******"/>
            <div id="login_buttons" className={styles.login_buttons}>
                <button id="clear_btn" className={styles.clear_btn}>Clear</button>
                <button id="login_btn" className={styles.login_btn}>Login</button>
            </div>
        </div>
    </section>
    )
}