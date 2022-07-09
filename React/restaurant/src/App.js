import './App.css';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { OrderingScreen } from './components/OrderingScreen/OrderingScreen'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <OrderingScreen />
    </div>
  );
}

export default App;
