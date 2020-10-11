import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import setTitle from '../functions/setTitle';
import { NavLink } from '../ThingMakers/LinkMaker'

const Login = <NavLink to='/Login'>Login</NavLink>
const Logout = <NavLink to='/Logout'>Logout</NavLink>
const Account = <NavLink to='/Account'>Account</NavLink>

export default function Navbar() {
    const location = useLocation()
    const pathname = location.pathname

    setTitle(pathname)
    return <div>
        <NavLink to='/Products'>Products</NavLink>
        <NavLink to='/Cart'>My Cart</NavLink>

        <Switch>
            <Route path='*/loggedin*'>{Account}{Logout}</Route>
            <Route path='*/account*'></Route>
            <Route path='/'>{Login}</Route>
        </Switch>


    </div>
}