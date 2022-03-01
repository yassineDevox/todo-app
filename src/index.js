//https://www.geeksforgeeks.org/how-to-use-bootstrap-with-react/
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import  DoCodeApp  from './doCodeApp';

ReactDOM.render(
  <React.StrictMode>
    <DoCodeApp />
  </React.StrictMode>,
  document.getElementById('root')
);
