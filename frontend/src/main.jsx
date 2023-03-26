import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store/index";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// STEPS REQUIRED

// first make a file in store/filename.jsx  then import createSlice from raect-js/toolkit then make your own createSlice
// {name :" " , initialState :{} , reducers:{function(state){} , functions(state , action){}}}

// configureStore : is user to collect the all reducer function to the single file for passing to the index.js file

// provider : is use in the index.js file

// UseSelector : is use to get the function {previous all data}

// useDispatch : triggering a fuction we need a dispatch function {give or update the previous data}

// reducer : by the help of reducer the command will run

// payload : is use to increase somthing for particular amount and we get the value by action._
