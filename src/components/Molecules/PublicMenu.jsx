import React from 'react'
import { NavLink } from 'react-router-dom'

const PublicMenu = () => {
    return (
        <ul className="display-menu">
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/">Home</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/login">Ingresar</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" to="/registro">Registrarse</NavLink></li>
        </ul>
    )
}

export default PublicMenu