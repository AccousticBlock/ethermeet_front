import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyAppBar from './components/MyAppBar'
import DateTimePicker from './components/DateTimePicker'
import Button from '@material-ui/core/Button';
import { Web3Provider } from 'react-web3';
import MeetList from './components/MeetList'
import MakeMeetForm from './components/MakeMeetForm'

class App extends Component {
  render() {
    return (
      <div className="App">      
        <MyAppBar />
        <Button variant="contained" color="secondary" />
        <MakeMeetForm />
        <MeetList />
        <Web3Provider>
          {'fdsa'}
        </Web3Provider>
      </div>
    );
  }
}

export default App;
