import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './context/store';
import { Provider } from 'react-redux';

import './index.css';

// As of React 18
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
