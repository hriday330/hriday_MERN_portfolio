import React, { useEffect, useState } from 'react';
import './Login.css';
import { Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';
import { useAlert } from 'react-alert';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    //const alert = useAlert();
    //useAlert() breaks hook rules 
    const loginFormHandler = (e) => {
        e.preventDefault();
        dispatch(login(email,password));
    };
    const { loading, message, error } = useSelector((state) => state.login);
    useEffect(() => {
        
        if (error) {
            dispatch({type: "CLEAR_ERRORS"});
        } if (message) {
            dispatch({type: "CLEAR_MESSAGE"});
        }
    }, [alert,error,message,dispatch])
    return (
        <div className="login">
            <div className="loginContainer">
                <form className="loginForm" onSubmit={loginFormHandler}>
                    <Typography variant="h3" letterSpacing="5px">ADMIN PANEL</Typography>
                    <input
                        type="email"
                        placeholder="Admin email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type="password"
                        placeholder="Email"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <Button variant="contained" type="submit" disabled ={loading} >Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
