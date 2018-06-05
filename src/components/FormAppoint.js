import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default class FormAppoint extends Component {
  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          onChange={this.handleChange('name')}
          margin="normal"
        />
      </form>
    )
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
}  