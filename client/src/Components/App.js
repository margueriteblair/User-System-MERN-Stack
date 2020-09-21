import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'
import Button from './Button'
import Styles from '../utils/styles'

function App() {
  return (
    < BrowserRouter>
    <Button text='Dark Mode' onClick={() => {Styles.currentStyle = Styles.dark; this.setState({style: Styles.dark})}}/>
    <Button text='Light Mode' onClick={() => {
      Styles.currentStyle = Styles.light;
      this.setState({styles: Styles.light})
    }}/>
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
