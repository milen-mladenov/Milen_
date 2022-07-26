import { TableRow } from "./TableRows/TableRow";
import styles from "./TableOrder.module.css";
import { useEffect, useState } from "react";

const newItem = {
  name: "",
  count: 0,
  currentOrder: 0,
  price: 0,
};

export const TableOrder = ({ order, orderHandler, finishOrder }) => {
  const [currItem, setCurrItem] = useState(newItem);

  function addRow() {
    console.log(order);
    orderHandler(currItem);
  }

  function handleItemInput(item) {
    console.log(item);
    setCurrItem(item);
    console.log(item);
  }
  function log() {
    console.log(order);
  }

  // function orderHandler(item) {
  //   let oldOrder = order.filter((order) => order !== item);

  //   oldOrder.push(item)
  //   setOrder(oldOrder);

  //   // setOrder((old) => [...old, item]);
  // }
 
  let index = order.length - 1;
  function createNewRow(e) {
    if (e.keyCode == 13) {
      if (order[index].name && order[index].count > 0) {
        addRow();
        console.log("yep");
      }
      console.log(index);
    }
  }

  return (
    <>
      <div id="order_table" className={styles.order_table}>
        <div>
          {/* <tr id="order_table_head" className={styles.order_table_head}>
            <th>
              <p>коментар</p>
            </th>
            <th>
              <p>име артикул</p>
            </th>
            <th>
              <p>поръчани</p>
            </th>
            <th>
              <p>добави</p>
            </th>
            <th>
              <p>ед. сума</p>
            </th>
          </tr> */}
        </div>

        <div onKeyDown={createNewRow}>
          {order.map((item) => (
            <TableRow
              key={Math.random(5000)}
              item={item}
              handleItemInput={handleItemInput}
            />
          ))}
        </div>
      </div>
      <button onClick={addRow} className={styles.addRow}>
        +
      </button>
      <button onClick={log} className={styles.addOrder}>
        add order
      </button>
    </>
  );
};
