import React from 'react'
import { NavLink as RNavLink, Link as RLink, useLocation } from 'react-router-dom'

// const NavLink = p => {
//     const location = useLocation()

//     return <RNavLink to={{
//         pathname: p.to,
//         state: location
//     }}>{p.children}</RNavLink>
// }

// const Link = p => {
//     const location = useLocation()

//     return <RLink to={{
//         pathname: p.to,
//         state: location
//     }}>{p.children}</RLink>
// }


export const [Link, NavLink] = [RNavLink, RLink].map(C => p=> {
    const location = useLocation()

    return <C to={{
        pathname: p.to,
        state: location
    }}>{p.children}</C>
})


// export default { Link, NavLink }