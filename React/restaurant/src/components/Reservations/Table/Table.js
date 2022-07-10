import styles from '../Reservations.module.css'


export const Table = ({ info }) => {
    return (
        <div className={styles.table} id="table_id_1" data-table-reservation="true" data-table-state="free"
            data-current-user="true">
            <p>{info.note}</p>
            <p>{info.number}</p>
        </div>
    )
}