import React from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom';

const Button = p => {
    const location = useLocation()
    return <Link {...p} to={
        p.to ? {
            pathname: p.to,
            state: location
        }
            : { ...location.state }
    }>{p.children}</Link>
}

const Modal = (mp) => {
    const [Go, Back] = Array(2).fill(bp => Button({...mp,...bp}))
    return <>
        <Switch>
            <Route path={mp.when}>
                {mp.show({ Go, Back })}
            </Route>
        </Switch>
    </>
}

export default Modal