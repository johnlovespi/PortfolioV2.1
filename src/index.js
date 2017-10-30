import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

ReactDOM.render((
<BrowserRouter>
  <App />
</BrowserRouter>
), document.querySelector('#root-container'));
