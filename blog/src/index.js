import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { Toaster } from 'react-hot-toast';
import './styles/general.scss';

const rootContainer = document.getElementById('root');
ReactDOM.createRoot(rootContainer).render(
  <Provider store={store}>
    <Toaster toastOptions={{ duration: 4000 }} />
    <App />
  </Provider>
);
