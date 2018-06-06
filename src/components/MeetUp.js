import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default class MeetUp extends Component {
  render() {
    console.log(this.props)
    return (
      <TextField>{this.props.hostname}</TextField>
    )
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
}  