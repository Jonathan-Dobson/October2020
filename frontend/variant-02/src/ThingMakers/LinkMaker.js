import React from 'react'
import { NavLink as RNavLink, Link as RLink, useLocation } from 'react-router-dom'

export const [NavLink, Link] = [RNavLink, RLink].map(C => p=> {
    const location = useLocation()
    return <C to={{
        pathname: p.to,
        state: location
    }}>{p.children}</C>
})