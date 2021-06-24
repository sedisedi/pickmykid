import React from 'react';
import { Input, Label, Button} from '@windmill/react-ui';

import Sidebar from '../component/Sidebar'
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

const Cancel = () => {
    const [values, setValues] = useState("")

    const history = useHistory ()
    

    const updateValues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        history.push ('/dashboard')
    }
    return (


        <div className="maindiv">
            <div className="firstdiv"></div>
            <div className="seconddiv">


                <div className="formdiv">
                    <form>

                        <span style={{ textAlign: "center" }}> Cancel a pick up </span>
                        <h2></h2>                     

                        <Button onClick={submit} >
                            Cancel
                        </Button>

                        <h3>
                            NB: If you can't pick up your ward, we can bring him/her to your place of abode using the location provided in your sign up form or Ghana GPS at a fee of GHc 75.00.
                        </h3>
                        <button type="checkbox" required><h2>I agree</h2></button>


                    </form>
                </div>

            </div>

        </div>
    )
}

export default Cancel;