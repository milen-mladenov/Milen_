import styles from './Inventory.module.css'
import { Item } from './Item/Item'
import { Forms } from './Forms/Forms'

export const Inventory = () => {
    return (
        <section>
            <Forms />
            <form id="new_items" className={styles.new_items}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <input type="submit" value="submit_item" id="submit_new_items" className={styles.submit_btn}/>
            </form>
        </section>
    )
}