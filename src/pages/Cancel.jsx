import React from 'react';
import { Input, Label, Button} from '@windmill/react-ui';

import Sidebar from '../component/Sidebar'
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

import AllPickups from './dashboard/AllPickups';


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
            <div className="seconddiv" >
                <AllPickups/>


                <div className="formdiv">
                    <form>            

                        <h3>
                            NB: If you can't pick up your ward, we can bring him/her to your place of abode using the location provided by your sign up form or Ghana GPS at a fee of GHc 75.00.
                        </h3>

                        <Button onClick={submit} >
                           I Agree
                        </Button>

                        <Button onClick={submit} >
                           I Do Not Agree
                        </Button>


                    </form>
                </div>

            </div>

        </div>
    )
}

export default Cancel;