import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Windmill} from '@windmill/react-ui';
import {SidebarProvider} from '../src/context/SidebarContext';
import {createStore} from "redux";
import {Provider} from "react-redux";

export const CREATEPICKUPACTION = (value) => ({
  type : "CREATE_PICKUP",
  payload : value,
})

export const DELETEPICKUPACTION = (value) =>({
  type : "DELETE_PICKUP",
  payload : value,
  
})

const PickupReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_PICKUP" :
      return {...state, pickups: [...state.pickups, action.payload] };

      case "DELETE_PICKUP" :
        return {...state, pickups: state.pickups.filter((pickups, index) => pickups.name !== action.payload.name)};
      
      default :
      return state;
  }
};

const Store = createStore (PickupReducer, {
  pickups: [],
})

ReactDOM.render(

  <React.StrictMode>
    <Provider store = {Store}>
   <Windmill>
  <SidebarProvider>
   <BrowserRouter>
  <App />
  </BrowserRouter>
  </SidebarProvider>
  </Windmill> 
  </Provider>

  

  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
