import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles';

import {DataProvider} from './GlobalState'

ReactDOM.render(
  <>
  <React.StrictMode>
    <DataProvider>
    <GlobalStyles />
      <App />
    </DataProvider>
  </React.StrictMode>
  </>
   ,document.getElementById('root')
);

