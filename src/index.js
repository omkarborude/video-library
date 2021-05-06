import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { DataProvider } from "./DataProvider/DataProvider"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <DataProvider>
    <App />
    </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


