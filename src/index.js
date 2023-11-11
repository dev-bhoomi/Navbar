
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router component

import App from './App'; // Your main application component

ReactDOM.render(
  <Router> {/* Wrap your entire app with the Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
