import React from 'react';
import {Input, Label, Button} from '@windmill/react-ui';
import "./Login.css";
import pic from '../b3.jpg'
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

const Login = () => {
    const [values, setValues] = useState("")

    const history = useHistory()
    

    const updateValues = (e) => {
        setValues({ ...values, [e.target.email]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(values)

        history.push ('/dashboard') 
    }
    return (


        <div className="Logindiv">
            <div className="firstLogindiv"></div>
            <div className="secondLogindiv">


                <div className="imagediv">
                    <img src={pic} alt='pic1' height="100%" width="100%" />
                </div>

                <div className="formdiv">
                    <form>

                        <span style={{ textAlign: "center", fontSize:"90%", fontStyle: "italic", fontWeight: "bolder" }}> Log In </span>
                        
                            <Label>
                            <span> Email</span>
                            <Input className="mt-1" onChange={updateValues} name='Email'
                                type="email" placeholder="Email"
                            />
                            </Label>
                        

                        
                            <Label>
                            <span> Password </span>
                            <Input className="mt-1" onChange={updateValues} name='Password'
                                type="password" placeholder="Password"
                            />
                            </Label>
                        

                        

                        <Button className = 'mt-2 mx-14' onClick={submit}>
                            Submit
        </Button>


                    </form>
                </div>

            </div>

        </div>
    )
}

export default Login;