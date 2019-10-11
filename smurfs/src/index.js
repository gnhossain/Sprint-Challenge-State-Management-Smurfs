import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";


import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from '../src/reducers/reducer';

const composeEnhancers = window.__REDUX_DVETOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);



const rootElement = document.getElementById('root');
ReactDOM.render(
   <Provider store={store}>
       <App/>
   </Provider>,
   rootElement
);
