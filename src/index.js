import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store";
import { Provider } from 'react-redux'; // импортировал Provider Обязательно для редакса

// action = {type: "", payload: ""} // action - это объект с типом и с какими-то данными в payload

// оборачиваю всё приложение в Provider и в параметры ему передаю store, чтобы использовать store внутри всего приложения
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
