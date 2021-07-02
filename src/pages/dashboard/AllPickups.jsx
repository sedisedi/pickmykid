import { connect } from "react-redux";

import Pickupcard from "../../component/appcomponents/pickupcard";



const AllPickups = (props) => {
    return (
        <div className="flex flex-wrap">
            {props.pickup.map ((pick) => {
                return (
                    <div>
                        <Pickupcard user = {pick}/>
                    </div>
                );
    })
}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pickup: state.pickups 

    }
};

export default connect (mapStateToProps) (AllPickups);