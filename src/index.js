
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './Context/CartContext';
import { SearchProvider } from './Context/SearchContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <CartProvider>
      <Router>
        <ToastContainer />
        <App />
      </Router>
    </CartProvider>
  </SearchProvider>
  ,
);