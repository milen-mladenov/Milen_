import { TableRow } from "./TableRows/TableRow";
import styles from "./TableOrder.module.css";
import { useEffect, useState } from "react";

// {table, setTable}
export const TableOrder = () => {
  const [openedTables, setOpenedTables] = useState([
    [
      25,
      [
        {
          name: "name1",
          price: "2.25",
          count: "7",
          currentOrder: 0,
        },
        {
          name: "name2",
          price: "2.25",
          count: "7",
          currentOrder: 0,
        },
        {
          name: "name3",
          price: "2.25",
          count: "7",
          currentOrder: 0,
        },
        {
          name: "name4",
          price: "2.25",
          count: "7",
          currentOrder: 0,
        },
        {
          name: "name5",
          price: "2.25",
          count: "7",
          currentOrder: 0,
        },
        {
          name: "name6",
          price: "2.25",
          count: "7",
          currentOrder: 0,
        },
        {
          name: "name7",
          price: "2.25",
          count: "7",
          currentOrder: 0,
        },
      ],
    ],
    [20, [{}]],
    [37, [{}]],
  ]);
  const [table, setTable] = useState(openedTables[0]);
  const [order, setOrder] = useState(table[1]);
  const [currItem, setCurrItem] = useState({
    name: "",
    count: 0,
    currentOrder: 0,
    price: 0,
  });

  function addRow() {
    const newItem = {
      name: "",
      count: 0,
      currentOrder: 0,
      price: 0,
    };
    setOrder((order) => [...order, newItem]);
  }

  function finishOrder() {
    let currTable = table[0];
    let tableOrder = [currTable, order];
    let restOftables = openedTables.filter((table) => table[0] !== currTable);
    setTable(tableOrder);
    restOftables.push(table);
    setOpenedTables(restOftables);
  }

  function log() {
    console.log(order);
  }

  function orderHandler(item) {
    let oldOrder = order.filter((order) => order !== item);

    oldOrder.push(item)
    setOrder(oldOrder);

    // setOrder((old) => [...old, item]);
  }

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
      <table id="order_table" className={styles.order_table}>
        <thead>
          <tr id="order_table_head" className={styles.order_table_head}>
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
          </tr>
        </thead>

        <tbody onKeyDown={createNewRow}>
          {order.map((item) => (
            <TableRow
              key={Math.random(5000)}
              item={item}
              orderHandler={orderHandler}
            />
          ))}
        </tbody>
      </table>
      <button onClick={addRow} className={styles.addRow}>
        +
      </button>
      <button onClick={log} className={styles.addOrder}>
        add order
      </button>
    </>
  );
};
