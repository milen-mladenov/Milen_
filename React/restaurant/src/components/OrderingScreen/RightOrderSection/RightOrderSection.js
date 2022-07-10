import styles from './RightOrderSection.module.css'
import { MoreOptions } from './MoreOptions/MoreOptions'
import { TableOpened } from './TableSelect_opened/TableOpened'
import { TableOptions } from './TableSelect_options/TableOptions'

export const RightOrderSection = () => {
    return (
        <>

            <section id="table_select_and_menu_section" className={styles.table_select_and_menu_section} data-table-select-status="active">
                <div id="table_select_section" className={styles.table_select_section}>
                    <button id="open_new_table_button" className={styles.open_new_table_button}>Отвори нова маса</button>
                    <TableOptions />

                    <TableOpened />
                </div>
            </section>

            <section id="opened_table_section" className={styles.opened_table_section} data-table-select-status="inactive">
                <div id="go_back_link" className={styles.go_back_link}>
                    <h2>&#10094;</h2>
                    <a href="#">Обратно към отворените маси</a>
                </div>
                <div id="opened_table_name_section" className={styles.opened_table_name_section}>
                    <h2 id="opened_table_name">Детайли за маса №: <span class="current_table_number">25</span></h2>
                    <h2 id="opened_table_note"></h2>
                </div>
                <h3 id="opened_table_server" className={styles.opened_table_server}>Сервитьор</h3>
                <div id="opened_table_buttons" className={styles.opened_table_buttons}>
                    <button id="opened_table_print" className={styles.opened_table_print}>Касова бележка</button>
                    <button id="close_table" className={styles.close_table}>Затвори масата</button>
                </div>
                <MoreOptions />
            </section>

        </>
    )
}