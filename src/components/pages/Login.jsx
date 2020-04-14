import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import {Error_message} from '../../redux/actionCreators'


    // const aunthentication = e => {
    //     e.preventDefault()
    //     const form = e.target
    
    //     const data = {
    //         "id":"1",
    //         "correo":form.email.value,
    //         "contrasenia":form.password.value,
    //         "tipo":"1",
    //         "estado":"1"
    //     }
    
    //     const miinit={
    //         method:'POST',                    
    //         headers: {"Content-type":"application/json"},
    //         body:JSON.stringify(data)}
    
    //     const url = 'https://localhost:44351/api/login';
    
    //     fetch(url,miinit).then(response=>{console.log(response);return response.json()})
    //     .then(response=>{if(response.apiEstado=='error'){localStorage.setItem('aviso_error',response.apiMensaje);dibujarerror(response.apiMensaje)} else {console.log(response);localStorage.setItem('token',response.token); window.location="/"}})
    
    //         }

    const Login = () => {

        const aviso_de_error = useRef(null)

        const [error, setError] = useState("");

        const aunthentication = e => {
            e.preventDefault()
            const form = e.target
        
            const data = {
                "id":"1",
                "correo":form.email.value,
                "contrasenia":form.password.value,
                "tipo":"1",
                "estado":"1"
            }
        
            const miinit={
                method:'POST',                    
                headers: {"Content-type":"application/json"},
                body:JSON.stringify(data)}
        
            const url = 'https://localhost:44351/api/login';
        
            fetch(url,miinit).then(response=>{console.log(response);return response.json()})
            .then(response=>{if(response.apiEstado=='error'){setError(response.apiMensaje);aviso_de_error.current.style.display="flex"} 
                            else {console.log(response);aviso_de_error.current.style.display="none";localStorage.setItem('token',response.token);setError(""); window.location="/"}})
        
                }

        useEffect(() => {        
          },[])
        
        return (
        
        <div className="page-login">
            <h1 className="titulo-login">Ingreso</h1>
                <form className="Formulario" onSubmit={aunthentication.bind()}>

                    <div className="form_item">
                    
                            
                            <input className="form_email" type="email" name="email" id="email" placeholder="Ingresa tu email oe" required/>
                        
                    </div>

                    <div className="form_item">

                            <input className="form_password" type="password" name="password" id="password" placeholder="Ingresa tu contraseña oe" required/>
                        
                    </div>


                    <div className="form_item">
                    
                    <input type="submit" className="formulario_btnsend" value="Iniciar sesión"/>
                    
                    </div>


                    <div className="login-error" ref={aviso_de_error}>
                        <span className="mensaje-error">{error}</span>
                    </div>

                    <div className="login-help">
                        <Link className="login-help-link" to="/registro">Registrarse</Link>
                    </div>
                </form>

        </div>
    )}


export default Login