/*
this is the root of any React application.
import React, any css, media, and the root jsx file (App.js).
App.js is the root component (i.e. segment of react and every other
  subsequent component is attached to it, like a tree).

  We only need to import App in this file, while other components we
  build should be imported under App.js itself.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


