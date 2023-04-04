import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './fonts/AmazonEmber_Lt.ttf';
import './fonts/Amazon-Ember-Medium.ttf';
import './fonts/AmazonEmber_Bd.ttf';
import { StateProvider } from './components/StateProvider/StateProvider';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
