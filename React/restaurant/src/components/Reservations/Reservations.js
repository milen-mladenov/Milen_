import styles from './Reservations.module.css'
import { Table } from "./Table/Table"


export const Reservations = () => {

    const info = {
        number: 5,
        note: ""
    }
    return (
        <section>

            <div id="top" className={styles.top}>
                <div id="go_back" className={styles.go_back}>
                    <h2>&#129152;</h2>
                    <h2>Назад към работното меню</h2>
                </div>
                <div id="current_table" className={styles.current_table}>
                    <h2>Състояние на масите</h2>
                    <h2 class="current_table">25</h2>
                </div>
            </div>

            <div id="all_tables" className={styles.all_tables}>
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <Table info={info} />
                <div id="table_buttons" className={styles.table_buttons}>
                    <div id="type_buttons" className={styles.type_buttons} data-button-state="inactive">
                        <button id="id_open_table" className={styles.id_open_table}>OPEN</button>
                        <button id="id_open_table_" className={styles.id_open_table_}>OPEN 2</button>
                    </div>
                    <div id="combine_tables" className={styles.combine_tables} data-button-state="active">
                        <button id="combine_table" className={styles.combine_table}>COMBINE</button>
                    </div>
                </div>
            </div>

        </section>
    )
}