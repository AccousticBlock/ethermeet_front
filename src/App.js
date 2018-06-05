import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBar from './components/MyAppBar'
import FormAppoint from './components/FormAppoint'
import DateTimePicker from './components/DateTimePicker'
import Button from '@material-ui/core/Button';
import { Web3Provider } from 'react-web3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyAppBar />
        <Button variant="contained" color="secondary" />
        <FormAppoint />
        <DateTimePicker />
        <Web3Provider>
          {'fdsa'}
        </Web3Provider>
      </div>
    );
  }
}

export default App;
