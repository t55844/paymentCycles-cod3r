import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi'

import './index.css';

import reducers from './globalState/reducers'
import App from './App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, promise)(legacy_createStore)(reducers, devTools)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
