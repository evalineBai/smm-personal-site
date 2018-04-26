import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouter from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Router><AppWithRouter /></Router>, document.getElementById('app'));
