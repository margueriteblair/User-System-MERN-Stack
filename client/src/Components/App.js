import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'
import {ThemeProvider} from '../hooks/ThemeContext'
// import Button from './Button'
// import Styles from '../utils/styles'​​​
function App() {

  return (
  <BrowserRouter>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
