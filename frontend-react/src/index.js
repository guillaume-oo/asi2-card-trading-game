// import react tools
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import the created Main component
import {Main} from './Main';
import 'semantic-ui-css/semantic.min.css'
import './css/index.css'
import store from './core/reducers/store';

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
, document.getElementById('root'));