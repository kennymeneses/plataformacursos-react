import React, { createRef, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import PrivateMenu from '../Molecules/PrivateMenu'
import PublicMenu from '../Molecules/PublicMenu'
import { ModStyleElemnt } from '../../redux/actionCreators'


// const nav = createRef()
// const navselec = nav.current
// const Show_Hidden_Nav = () => navselec.style.left="0"

const Header =()=>{

    const nav = useRef(null)
    const Show_Hidden_Nav=()=>ModStyleElemnt(nav.current)


    useEffect(()=>{

    
    })

    return(
    <header className="main-header">
        <div className="container-header">
            <div className="main-menu-toggle" onClick={()=>Show_Hidden_Nav()}>

            </div>

            <div className="container-logo">
                <NavLink className="link" to="/">
                    <img
                        className="main-logo" 
                        src="https://www.stickpng.com/assets/images/585990234f6ae202fedf28cf.png" 
                        alt="Principal logo"
                    />
                </NavLink>
            </div>

            <div className="container-nav">
                <nav className="main-nav" ref={nav} >
                    {
                        localStorage.getItem('token') ?
                         <PrivateMenu />:
                         <PublicMenu />                                                 
                    }
                </nav>
            </div>

            <div className="container-user">
                <NavLink className="link" to ="/">
                    <img
                        className="user-logo"
                        src ="https://boxpatagonia.com/public/mainpublic/images/user.png"
                        alt="Logo usuario"
                    />
                </NavLink>

            </div>

        </div>
    </header>
    )
}

export default Header