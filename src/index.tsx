import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './models/init';
import 'normalize.css/normalize.css';
import {App} from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
