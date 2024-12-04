import './App.css';
import Basket from './components/Basket';
import { Cart } from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex justify-center">
          <Cart />
          <Basket />
        </div>
        
      </div>
 
    </div>
  
  );
}

export default App;