import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import MeetUp from './MeetUp'

export default class MeetList extends Component {
  render() {
    return (
      <div>
      <MeetUp />
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