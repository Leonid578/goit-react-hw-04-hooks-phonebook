import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './Components/App';
import './main.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
//   document.getElementById('root')
// );
