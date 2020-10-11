import React from 'react';
import './App.css';
import Modal from './ThingMakers/ModalMaker';
import Nav from './Components/Navbar';
import Login from './Dialogs/Login/Login';


const Cart = ({ Go, Back }) => <p>My Cart <br />
  <Go to='/pay'>Continue to Pay</Go>
  <Go to='/profile'>Profile</Go>
  <Back>Back</Back>
</p>

const Pay = ({ Go, Back }) => <p>Pay <br />
  <Go to='/pay'>Continue to Pay</Go>
  <Go to='/profile'>Profile</Go>
  <Back>Back</Back>
</p>

const Profile = ({ Go, Back }) => <p>Profile <br />
  <Go to='/pay'>Continue to Pay</Go>
  <Go to='/profile'>Profile</Go>
  <Back>Back</Back>
</p>



function App() {
  return (
    <div className="App">
      <Nav />

      <Modal when="/cart" show={Cart} />
      <Modal when="*/Login*" show={Login} />
      <Modal when="/profile" show={Profile} />
      <Modal when="/pay" show={Pay} />


    </div>
  );
}

export default App;
