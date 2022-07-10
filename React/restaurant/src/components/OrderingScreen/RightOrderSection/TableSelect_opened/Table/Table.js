import styles from '../../RightOrderSection.module.css'


export const Table = () => {
    return (
        <div className={styles.opened_table} data-table-number="7" data-own-table="false">
            <p className={styles.table_open_time}></p>
            <p className={styles.table_n}>7</p>
            <p className={styles.table_message} data-has-message="true">&#128172;</p>
            <p className={styles.table_redact} data-has-access="full">&#9998;</p>
        </div>
    )
}