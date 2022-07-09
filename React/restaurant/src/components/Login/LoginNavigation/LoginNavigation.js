import styles from './LoginNavigation.module.css'
import { Option } from './MenuOption/MenuOption'


export const LoginNavigation = () => {
    return (
        <section id="select_menu" className={styles.select_menu} data-login-state="logged_out">
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />

    </section>
    )
}