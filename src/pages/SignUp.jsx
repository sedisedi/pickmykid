import React from 'react';
import { Input, Label, Button} from '@windmill/react-ui';
import "./SignUp.css";
import pic from './signuppic.jpg';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

const SignUp = () => {
    const [values, setValues] = useState("")

    const history = useHistory ()
    

    const updateValues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        history.push ('/login')
    }
    return (


        <div className="maindiv">
            <div className="firstdiv"></div>
            <div className="seconddiv">


                <div className="imagediv">
                    <img src={pic} alt='pic1' height="100%" width="100%" />
                </div>

                <div className="formdiv">
                    <form>

                        <span style={{ textAlign: "center" }}> Sign Up </span>
                        <Label>
                            <span> Full Name</span>
                            <Input className="mt-1" onChange={updateValues} name='fullname'
                                type="text" placeholder="Full Name"
                            />
                            </Label>

                            <Label>
                            <span> Address</span>
                            <Input className="mt-1" onChange={updateValues} name='addresss'
                                type="text" placeholder="Address"
                            />
                            </Label>

                            <Label>
                            <span> Email</span>
                            <Input className="mt-1" onChange={updateValues} name='email'
                                type="email" placeholder="Email"
                            />
                            </Label>

                            <Label>
                            <span> Password</span>
                            <Input className="mt-1" onChange={updateValues} name='password'
                                type="password" placeholder="Password"
                            />
                            </Label>

                            <Label>
                            <span> Confirm Password</span>
                            <Input className="mt-1" onChange={updateValues} name='confirm password'
                                type="password" placeholder="Confirm Password"
                            />
                            </Label>

                            <Label>
                            <span> Mobile</span>
                            <Input className="mt-1" onChange={updateValues} name='mobile'
                                type="tel" placeholder="Mobile"
                            />
                            </Label>

                        <Label>
                            <span> Location</span>
                            <Input className="mt-1" onChange={updateValues} name='location'
                                type="text" placeholder="Location"
                            />
                            </Label>

                            <Label>
                            <span> Ghana Post GPS </span>
                            <Input className="mt-1" onChange={updateValues} name='ghanagpostgps'
                                type="number" placeholder="Ghana Post GPS"
                            />
                            </Label>

                            <Label>
                            <span> Upload your image</span>
                            <Input className="mt-1" onChange={updateValues} name='uploadyourimage'
                                type="file" placeholder="Upload your image"
                            />
                            </Label>

                            <Label>
                            <span> Voter's ID Number</span>
                            <Input className="mt-1" onChange={updateValues} name='votersidnumber'
                                type="number" placeholder="Voter's ID Number"
                            />
                            </Label>

                        <Button onClick={submit} >
                            Submit
                        </Button>


                    </form>
                </div>

            </div>

        </div>
    )
}

export default SignUp;