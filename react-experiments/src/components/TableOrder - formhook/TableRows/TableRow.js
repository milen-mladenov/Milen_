import styles from "../TableOrder.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const TableRow = ({ item, handleItemInput }) => {
  const [order, setOrder] = useState(item.currentOrder || 0);
  const [currItem, setCurrItem] = useState(item);
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);
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
    e.preventDefault()
    let nextItem;
    if (e.keyCode == 13) {
      if (currItem.name.length >= 4 && order > 0) {
        nextItem = true;
      }
      if (nextItem) {

        handleSubmit(handleRegistration)
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
    <form onKeyDown={addItem}>
      <label className={styles.note}>
        {currItem.note ? <p>{currItem.note}</p> : <p>+</p>}
      </label>
      <label>
        <input
          className={styles.ordered_item}
          type="text"
          placeholder="Име / Номер"
          name="name"
          {...register("name")}
        />
      </label>
      <label>
        <p className={styles.count}>{currItem.count}</p>
      </label>
      <label>
        <div className={styles.order_number}>
          <button onClick={decrement}>-</button>
          <input
            type="number"
            max="999"
            name="amount"

            {...register("amount")}
          />
          <button onClick={increment}>+</button>
        </div>
      </label>
      <label>
        <p className={styles.price}>{item.price}</p>
      </label>
    </form>
  );
};
