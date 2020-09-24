import React //{ useState, useEffect, use} 
from 'react';

import {BrowserRouter} from 'react-router-dom';

import AppRouter from './AppRouter';

import { ThemeProvider } from '../hooks/ThemeContext';

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
