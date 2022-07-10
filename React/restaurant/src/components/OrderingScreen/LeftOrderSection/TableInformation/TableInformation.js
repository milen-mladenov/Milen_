import styles from './TableInformation.module.css'

export const TableInformation = ({ table }) => {
    return (
        <div id="order_table_top" className={styles.order_table_top}>
            <div id="table_name">
                <h2 id="selected_table_number">Поръчка за маса:</h2>
                <h2 id="selected_table_name">{table.number}</h2>
            </div>
            <div id="table_amount">
                <h2 id="selected_table_total_amount">{table.amount}</h2>
                <h2 id="currency_type">лв.</h2>
            </div>
        </div>
    )
}