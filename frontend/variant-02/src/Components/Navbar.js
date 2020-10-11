import React from 'react';
import { useLocation } from 'react-router-dom';
import setTitle from '../functions/setTitle';
import { Link, NavLink } from './LinkMaker'


export default function Navbar() {
    const location = useLocation()
    const pathname = location.pathname

    // const Link = p=><NavLink to={{
    //     pathname: p.to,
    //     state: location
    // }}>{p.children}</NavLink>

    setTitle(pathname)
    return <>
        <Link to='/signin'>Signin</Link>
        <NavLink to='/signin'>Signin</NavLink>

        {/* <NavLink to={{
            pathname: '/profile',
            state: location
        }}>Profile</NavLink>

        <NavLink to={{
            pathname: '/products',
            state: location
        }}>Products</NavLink>

        <NavLink to={{
            pathname: '/pay',
            state: location
        }}>Pay</NavLink> */}
    </>
}