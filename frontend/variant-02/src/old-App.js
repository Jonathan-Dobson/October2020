import React from 'react';
import './styles/App.css';
import Modal from './ThingMakers/ModalMaker';
import Nav from './Components/Navbar';
import Login from './Dialogs/Login/Login';
import Cart from './Dialogs/Cart';
import Checkout from './Dialogs/Checkout';
import Account from './Dialogs/Account';


function App() {
  return (
    <div className="App">
      <Nav />

      <Modal when="/cart" show={Cart} />
      <Modal when="*/Login*" show={Login} />
      <Modal when="/Account" show={Account} />
      <Modal when="/Checkout" show={Checkout} />


    </div>
  );
}

export default App;
