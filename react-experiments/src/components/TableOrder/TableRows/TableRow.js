import styles from "../TableOrder.module.css";
import { useEffect, useState } from "react";


export const TableRow = ({ item, handleItemInput }) => {
  const [order, setOrder] = useState(item.currentOrder || 0);
  const [currItem, setCurrItem] = useState(item);

  let currentOrder = currItem.currentOrder || 0;

  function increment() {
    setOrder(order + 1);
  }

  function decrement() {
    if (order > 0) {
      setOrder(order - 1);
    }
  }

  function addItem(e) {
    let nextItem;
    if (e.keyCode == 13) {
      if (currItem.name.length >= 4 && order > 0) {
        nextItem = true;
      }
      if (nextItem) {
        handleItemInput(currItem);
        console.log("added");
      }
    }
  }

  function handleInputOrder(e) {
    let name = e.target.name;
    let value = e.target.value;
    setCurrItem((lines) => ({
      ...lines,
      [name]: value,
    }));
  }

  function handleInput(e) {
    let value = Number(e.target.value);
    setOrder(value);
    setCurrItem((lines) => ({
      ...lines,
      count: currentOrder,
    }));
  }

  return (
    <tr onKeyDown={addItem}>
      <td className={styles.note}>
        {currItem.note ? <p>{currItem.note}</p> : <p>+</p>}
      </td>
      <td>
        <input
          className={styles.ordered_item}
          type="text"
          placeholder="Име / Номер"
          name="name"
          onChange={handleInputOrder}
          value={currItem.name}
          
        />
      </td>
      <td>
        <p className={styles.count}>{currItem.count}</p>
      </td>
      <td>
        <div className={styles.order_number}>
          <button onClick={decrement}>-</button>
          <input
            type="number"
            max="999"
            name="amount"
            onChange={handleInput}
            value={order}
            
          />
          <button onClick={increment}>+</button>
        </div>
      </td>
      <td>
        <p className={styles.price}>{item.price}</p>
      </td>
    </tr>
  );
};
