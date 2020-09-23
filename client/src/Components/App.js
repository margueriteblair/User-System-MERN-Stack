import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'
// import Button from './Button'
// import Styles from '../utils/styles'​​​
function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
export default App;
