import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
const App = () =>{
  return (
    <Provider store={store}>
    <div
    style = {{padding: '20px'}}>
     <h1>Online store from Nara</h1>
     <ProductList/>
     <Cart/>
    </div>
    </Provider>
  );
};

export default App;
