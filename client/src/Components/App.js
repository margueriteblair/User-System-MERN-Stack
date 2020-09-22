import React, { useState, useEffect, useContext } from 'react';
// import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'
import Button from './Button'
import Styles from '../utils/styles'

export default class App extends React.Component { //TODO: Create AppRouter

  constructor() {
    super();
    this.state = {
      style: Styles.currentStyle
    };
  }

  render() {
    return (
      <div className={"App " + this.state.style}>
        <Button 
          text='Dark Mode'
          onClick={() => {
            Styles.currentStyle = Styles.dark; 
            this.setState({style: Styles.dark});
          }}
        />
        <Button 
          text='Light Mode'
          onClick={() => {
            Styles.currentStyle = Styles.light; 
            this.setState({style: Styles.light});
          }}
        />
        <hr/>
        <AppRouter/>
        <hr/>
      </div>
    );
  }
}