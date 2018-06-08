import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  cell: {
    width: '33%',
    textAlign: 'center',
  },
});

function MeetUp(props) {
  const { classes, title, name, date } = props;

  return (
    <TableRow>
      <CustomTableCell className={classes.cell}>{title}</CustomTableCell>
      <CustomTableCell className={classes.cell}>{name}</CustomTableCell>
      <CustomTableCell className={classes.cell}>{date}</CustomTableCell>
    </TableRow>
  );
}

MeetUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeetUp);
