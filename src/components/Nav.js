import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav = () => {
    return (
        <div className="asideBar">
            <NavLink exact to='/' activeClassName="selected">Inicio</NavLink>
            <NavLink exact to='/counter' activeClassName="selected">Counter</NavLink>
            <NavLink exact to='/form' activeClassName="selected">Form</NavLink>
        </div>
    )
}

export default Nav
