import styles from './LeftOrderSection.module.css'
import { sectionButtons } from '../../utility/filters';
import { SectionButton } from './SectionButton/SectionButton';
import { ItemButtons } from './ItemButtons/ItemButtons';
import { ItemKeypad } from './ItemKeypad/ItemKeypad';
import { TableInformation } from './TableInformation/TableInformation';
import { TableOrder } from './TableOrder/TableOrder';

export const LeftOrderSection = () => {
    let tableNumber = 5;
    let tempInfo = {
        number: "5",
        amount: "1.5"
    }
    return (
        <section id="orders_section" className={styles.orders_section}>
            <div id="order_section_action_type" className={styles.order_section_action_type}>
                <h2 id="order_section_action">Въведи поръчка за маса:</h2>
                <h2 className="current_table_number">{tableNumber}</h2>
            </div>
            <div id="order_section_buttons" className={styles.order_section_buttons}>
                <SectionButton info={sectionButtons.itemButtons} />
                <SectionButton info={sectionButtons.keypad} />
            </div>
            <div id="ordering_section" className={styles.ordering_section}>
                <ItemButtons />
                <ItemKeypad />
            </div>
            <div id="orderdered_items" className={styles.orderdered_items}>
                <TableInformation table={tempInfo} />
                <TableOrder />
            </div>
            <button id="send_order_button" className={styles.send_order_button} disabled>Поръчай</button>
        </section>
    )
}