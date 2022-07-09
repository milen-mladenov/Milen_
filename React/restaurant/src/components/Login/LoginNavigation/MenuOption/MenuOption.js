import styles from '../LoginNavigation.module.css'

export const Option = (props) => {
    return (
        <div className={styles.select_menu_option}>
        <p>{props.option}</p>
        <p>&#9851;</p>
    </div>
    )
}