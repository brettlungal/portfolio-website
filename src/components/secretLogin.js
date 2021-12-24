import { useEffect, useState } from 'react';
import React, {Component} from 'react';
import {Grid,Cell,Textfield, Button} from 'react-mdl';
import logo from '../img/bl.PNG'
import emailjs from 'emailjs-com';
import SecretData from './secretData'
require('dotenv').config()

const { REACT_APP_SECRET_USER, REACT_APP_SECRET_PASS } = process.env;

const SecretLogin = () =>{

    const [authenticated, setAuthenticated] = useState(false);

    useEffect( () => {
        if ( authenticated ){
            console.log("authenticated successfully");
        }
    },[authenticated]);

    const authenticate = (event) =>{
        event.preventDefault();

        let username = event.target.username.value;
        let password = event.target.password.value;
        if ( username === "" || password === "" ){
            alert("Username and Pasword Required");
            return;
        }

        if ( username === REACT_APP_SECRET_USER && password === REACT_APP_SECRET_PASS ){
            setAuthenticated(true);
        }else{
            alert("incorrect username or password");
        }

        event.target.reset();
    }

    const Login = () =>{
        return(
            <div style={{width:'80%',margin:'auto'}}>
    
                <Grid>
                    <Cell col={8}>
                        <div style={{marginLeft:'50%'}}>
                            <img 
                                src={logo}
                                alt="letter"
                                style={{width:'200px',marginTop:'5%',marginLeft:'29%',marginBottom:'5%'}}
                            />
                            <form onSubmit={authenticate}>
                                <div className="form-input">
                                    <input type="text" className="form-control" placeholder="Username" name="username"/>
                                </div>
    
                                <div className="form-input">
                                    <input type="password" className="form-control" placeholder="Password" name="password"/>
                                </div>
    
                                <div className="submit-btn">
                                    <input type="submit" className="form-btn" value="Login"/>
                                </div>
                            </form>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

    return(
        <div>
            {!authenticated && <Login/>}
            {authenticated && <SecretData/>}
        </div>
    );
    
    
}

export default SecretLogin;