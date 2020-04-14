import React from 'react'
import { NavLink } from 'react-router-dom'

const removeToken = ()=>{
    localStorage.removeItem('token')
    window.location= "/"
}

const PrivateMenu = () =>{
    return (
        <ul className="display-menu">
            <li className="display-menu-item"><NavLink className="link-nav" exact to="/">Home</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" to="/especialidades">Especialidades</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" to="/cursos">Cursos</NavLink></li>
            <li className="display-menu-item"><NavLink className="link-nav" to="/profesores">Profesores</NavLink></li>
            <li className="display-menu-item"><span onClick={()=>removeToken()} className="link-nav-logout link-nav">Logout</span></li>
        </ul>
    )
}

export default PrivateMenu