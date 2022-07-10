import styles from '../LeftOrderSection.module.css'

export const SectionButton = ({info}) => {
    return (
        <button data-order-button-status="active" className={styles.order_section_button}
            id="order_section_item_list_button">{info.name}</button>
    )
}