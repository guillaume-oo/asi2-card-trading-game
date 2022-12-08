// import react tools
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import the created Main component
import {Main} from './Main';
import 'semantic-ui-css/semantic.min.css'
import './css/index.css'
import store from './core/store';

//Insert a <Main> component inside the <div id='root'/>
// send the property title to the App component
ReactDOM.render(
<Provider store={store}>
<Main />
</Provider>

, document.getElementById('root'));