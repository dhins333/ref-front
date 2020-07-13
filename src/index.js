import 'normalize.css/normalize.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store = {store}>
    <AppRouter />
  </Provider>
  ,
  document.getElementById('root')
);
