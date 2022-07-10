import styles from '../Inventory.module.css'


export const Item = () => {
    return (
        <div className={styles.item}>
            <label htmlFor="product_code">
                <p>Product code</p>
                <input type="text" name="product_code" placeholder="product_code" />
            </label>
            <label htmlFor="product">
                <p>product</p>
                <input type="text" name="product" placeholder="product" />
            </label>
            <label htmlFor="product_number">
                <p>product number</p>
                <input type="text" name="product_number" placeholder="product_number" />
            </label>
            <label htmlFor="expiration">
                <p>expiration</p>
                <input type="date" name="expiration" placeholder="expiration" />
            </label>
            <label htmlFor="retail_price">
                <p>retail price</p>
                <input type="text" name="retail_price" placeholder="retail_price" />
            </label>
            <label htmlFor="sell_price">
                <p>sell price</p>
                <input type="text" name="sell_price" placeholder="sell_price" />
            </label>
            <label htmlFor="system_quant">
                <p>system quant</p>
                <input type="text" name="system_quant" placeholder="system_quant" />
            </label>
        </div>
    )
}