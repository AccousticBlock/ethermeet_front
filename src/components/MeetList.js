import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import MeetUp from './MeetUp'

export default class MeetList extends Component {
  // const arr= [{},{},{},];
  render() {
    return (
      <div>
      <MeetUp hostname={'june'}/>
      <MeetUp />
      <MeetUp />
      <MeetUp />
      <MeetUp />
      <MeetUp />
      </div>
    )
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
}  