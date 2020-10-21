import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import UseContext from './UseContext';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import UseEffect from './Components/UseEffect';
// import Axiosapi from './Components/Axiosapi';
import { BrowserRouter } from 'react-router-dom';
import Routerdom from './Components/Routerdom';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    // <App />
    // <UseContext />
    // <UseEffect />
    // <Axiosapi />
    <BrowserRouter>
        <Routerdom />
    </BrowserRouter>
    , rootElement
);