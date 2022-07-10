import './App.css';
import { Header } from './components/Header/Header';
import { Inventory } from './components/Inventory/Inventory';
import { Login } from './components/Login/Login';
import { OrderingScreen } from './components/OrderingScreen/OrderingScreen'
import { Reservations } from './components/Reservations/Reservations';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      {/* <OrderingScreen /> */}
      {/* <Reservations /> */}
      {/* <Inventory /> */}
    </div>
  );
}

export default App;
