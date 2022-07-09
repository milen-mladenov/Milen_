export const SectionButton = ({info}) => {
    return (
        <button data-order-button-status="active" class="order_section_buttons"
            id="order_section_item_list_button">{info.name}</button>
    )
}