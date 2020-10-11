import React from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom';

const Button = p => {
    const location = useLocation()
    return <Link to={
        p.to ? {
            pathname: p.to,
            state: location
        }
            : { ...location.state }
    }>{p.children}</Link>
}

const Modal = ({ when, show }) => {
    const [Go, Back] = Array(2).fill(p => Button({ ...p, when, show }))
    return <>
        <Switch>
            <Route path={when}>
                {show({ Go, Back })}
            </Route>
        </Switch>
    </>
}

export default Modal