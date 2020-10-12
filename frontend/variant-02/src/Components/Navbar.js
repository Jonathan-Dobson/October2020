import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import setTitle from '../functions/setTitle';
import { Link } from '../ThingMakers/LinkMaker'

const Login = <Link to='/Login'>Login</Link>
const Logout = <Link to='/Logout'>Logout</Link>
const Account = <Link to='/Account'>Account</Link>

export default function Navbar() {
    const location = useLocation()
    const pathname = location.pathname

    setTitle(pathname)
    return <nav>

        <Switch>
            <Route path='*/loggedin*'>{Account}{Logout}</Route>
            <Route path='*/account*'></Route>
            <Route path='/'>{Login}</Route>
        </Switch>
        <Link to='/Products'>Products</Link>
        <Link to='/Cart'>Cart</Link>
 
    </nav>
}