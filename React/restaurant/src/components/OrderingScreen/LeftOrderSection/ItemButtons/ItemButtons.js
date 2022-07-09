import { Item } from './Item/Item'
import styles from './ItemButtons.module.css'

export const ItemButtons = () => {
    const items = {name: "one",}
    return (
        <div id="order_section_item_list" data-order-section-status="active">
        <ul>
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
            <Item items={items} />
        </ul>
    </div>
    )
}