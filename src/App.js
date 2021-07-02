import './App.css';
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp';
import NavbarComponent from './component/navbarcomponent';
import Banner from './pages/banner';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/dashboard/Layout';
import { BrowserRouter } from "react-router-dom";
import Home from './Home'



function App() {
  return (
    <BrowserRouter>
   <Switch>
     <Route exact path = '/signup' component= {SignUp}/>

     <Route exact path = '/' component= {Banner}/>

     <Route exact path = '/login' component= {Login}/>

     <Route exact path = '/dashboard' component= {Layout}/>

     <Route exact path = '/dashboard/schedule' component= {Layout}/>

     <Route exact path = '/dashboard/cancel' component= {Layout}/>

     <Route exact path = '/dashboard/allpickups' component= {Layout}/>

     <Route exact path = '/dashboard/home' component= {Layout}/>
   </Switch>
      </BrowserRouter>
      
     
  )
}

export default App;

