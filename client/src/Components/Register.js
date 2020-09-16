import React from 'react'

//imported components
import Button from './Button';
import Form from './Form'

//utils
import {reqInputs} from '../utils/userInputs';
import { regReq } from '../utils/userRequests'



export default function Register() {
    const loginLink = '/login';
    return (
        <div className="register">
            <h1>
                Register for an Account
            </h1>
            <br/>
            <Form title="Register" inputs={reqInputs}
            submitFunc={regReq}
            id="registerForm"
            />
            <p>Already Have an Account?</p>
            <Button onClick={() =>{window.location = loginLink}} style={{color: "white", backgroundColor: "black"}} text="Login Button"/>
            <br/>
        </div>
    )
}
