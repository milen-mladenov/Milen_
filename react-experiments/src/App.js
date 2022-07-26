import { useState } from 'react';
import './App.css';
import {TableOrder} from './components/TableOrder - formhook/TableOrder'

function App() {
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

  function finishOrder(order) {
    let currTable = table[0];
    let tableOrder = [currTable, order];
    let restOftables = openedTables.filter((table) => table[0] !== currTable);
    setTable(tableOrder);
    restOftables.push(table);
    setOpenedTables(restOftables);
  }

  function orderHandler(curOrder){
    setOrder(old => ([
      ...old,
      curOrder
    ]))
    console.log(order);
  }


  return (
    <div className="App">
      <header className="App-header">
      <TableOrder order={order} orderHandler={orderHandler} finishOrder={finishOrder}/>
      </header>
    </div>
  );
}

export default App;
