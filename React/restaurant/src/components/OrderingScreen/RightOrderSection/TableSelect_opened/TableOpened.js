import styles from '../RightOrderSection.module.css'
import { Table } from "./Table/Table"



export const TableOpened = () => {
    return (
        <div id="opened_tables" className={styles.opened_tables}>
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
        </div>
    )
}