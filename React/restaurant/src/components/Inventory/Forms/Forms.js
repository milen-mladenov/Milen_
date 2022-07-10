import styles from '../Inventory.module.css'


export const Forms = () => {
    return (
        <div className={styles.form_buttons}>
            <button className={styles.button}>New Items</button>
            <button className={styles.button}>Inventory</button>
            <button className={styles.button}>Create new recipe</button>
        </div>
    )
}