import {Button} from '@windmill/react-ui';
import { useHistory } from 'react-router-dom';
import home from '../src/images/home.jpg';

const Home = () => {
    const history = useHistory () 

    const submit1 =() =>{
        history.push ('/dashboard/schedule')
    }
    const submit2 =() =>{
        history.push ('/dashboard/allpickups')

    }
    return (
        
    <div className = "flex flex-row h-screen" >
        <div className = "flex-1 flex justify-start items-center flex-col "  >
        <h1 className = "my-40 text-5xl font-sans font-medium">
        Welcome to Pick My Kid App
    </h1>
<div>
    <Button className = "text-xl mr-4" size="larger" onClick = {submit1}>Schedule</Button>
    <Button className = "text-xl" layout = 'outline' size = 'larger' onClick = {submit2}>All Pick ups</Button>
    </div>  
        </div
        >
        <div className = "flex-1 ">
            <img src ={home}  className= "h-4/5 "  width='100%'/>  

        </div>

        </div>
        
    )
};

export default Home;