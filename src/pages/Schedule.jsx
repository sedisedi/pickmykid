import React from 'react';
import { Input, Label, Button} from '@windmill/react-ui';
import Sidebar from '../component/Sidebar';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
// import { propTypes } from 'react-bootstrap/esm/Image';
import {connect} from "react-redux";
import {CREATEPICKUPACTION} from "../.";


const Schedule = (props) => {
    const [values, setValues] = useState("")

    const history = useHistory ()
    

    const updateValues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        alert ("pickup schedule succcessful")
    
    const {fullname, dateofpickup, timeofpickup, mobile, location, ghanagpsaddress, wardsname, wardsidnumber, relationtoward } = values

    props.CREATE_PICKUP ({fullname, dateofpickup, timeofpickup, mobile, location, ghanagpsaddress, wardsname, wardsidnumber, relationtoward

    });
    

    }
    return (

        
        <div className="maindiv"  >
            <div className="firstdiv"></div>
            <div className="seconddiv">


                <div className="formdiv">
                    <form>

                        <span style={{ textAlign: "center" }}> Schedule a pick up </span>
                        <Label>
                            <span> Full Name</span>
                            <Input className="mt-1" onChange={updateValues} name='fullname'
                                type="text" placeholder="Full Name"
                            />
                            </Label>

                            <Label>
                            <span> Date of pick up</span>
                            <Input className="mt-1" onChange={updateValues} name='dateofpickup'
                                type="date" 
                            />
                            </Label>

                            <Label>
                            <span> Time of pick up</span>
                            <Input className="mt-1" onChange={updateValues} name='timeofpickup'
                                type="time" 
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
                            <span> Ghana GPS Address</span>
                            <Input className="mt-1" onChange={updateValues} name='ghanagpsaddress'
                                type="number" placeholder="Ghana GPS Address"
                            />
                            </Label>

                            <Label>
                            <span> Ward's Name</span>
                            <Input className="mt-1" onChange={updateValues} name='wardsname'
                                type="text" placeholder="Ward's Name"
                            />
                            </Label>

                            <Label>
                            <span> Ward's ID Number</span>
                            <Input className="mt-1" onChange={updateValues} name='wardsidnumber'
                                type="number" placeholder="Ward's ID Number"
                            />
                            </Label>

                            <Label>
                            <span> Relation to Ward</span>
                            <Input className="mt-1" onChange={updateValues} name='relationtoward'
                                type="text" placeholder="Relation to Ward"
                            />
                            </Label>                         

                        <Button onClick={submit} >
                            Schedule
                        </Button>

                        <h3>
                            NB: For every 30 mins after time of pickup, you must pay GHc 50.00 for continuous supervision of your ward.
                        </h3>


                    </form>
                </div>

            </div>

        </div>
    )
};

const mapDispatchtoProps = (dispatch) => {
    return {
        CREATE_PICKUP: (value) => {
            dispatch(CREATEPICKUPACTION (value));
        },
    };
};

export default connect (null, mapDispatchtoProps) (Schedule);