import { Card, CardBody, Button } from "@windmill/react-ui";
import { connect } from 'react-redux';



function Pickupcard(props) {
    const submit = () => {

        props.DELETEPICKUPACTION(props.user)
    }

    return (
        <div>
            <Card className="h-98 w-96 text-lg font-serif bg-blue-200 mt-4 mb-4 ml-12 mr-12">
                <CardBody>
                    <p> Full Name: {props.user.fullname} </p>
                    <p> Date of Pick up: {props.user.dateofpickup} </p>
                    <p> Time of Pick up: {props.user.timeofpickup} </p>
                    <p> Mobile: {props.user.mobile} </p>
                    <p> location: {props.user.location} </p>
                    <p> Ghana GPS Address: {props.user.ghanagpsaddress} </p>
                    <p> Ward's Name: {props.user.wardsname} </p>
                    <p> Ward's Id Number: {props.user.wardsidnumber} </p>
                    <p> Relation to Ward: {props.user.relationtoward} </p>

                </CardBody>
                <Button className="ml-32 mb-5 mt-4 text-lg h-12 w-32" onClick={submit}> Cancel </Button>
            </Card>
        </div>
    )
};



const mapDispatchtoProps = (dispatch) => {
    return {
        DELETEPICKUPACTION: () =>
            dispatch({ type: 'DELETE_PICKUP', payload: 'value' }), reset: () => dispatch({
                type: 'RESET'
            })
    };
};



export default connect(null, mapDispatchtoProps)(Pickupcard);


