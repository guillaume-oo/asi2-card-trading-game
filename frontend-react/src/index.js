// import react tools
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import the created Main component
import {Main} from './Main';
import 'semantic-ui-css/semantic.min.css'
import './css/index.css'
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './core/store'
=======
import store from './core/reducers/store';
// import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 266731b1949c4d57ef0670fa2aca3fab24dc7dbf

//Insert a <Main> component inside the <div id='root'/>
// send the property title to the App component
ReactDOM.render(
<<<<<<< HEAD
<Provider store={store}>
    <Main />
</Provider>
=======
    <Provider store={store}>
        <Main />
    </Provider>
>>>>>>> 266731b1949c4d57ef0670fa2aca3fab24dc7dbf
, document.getElementById('root'));