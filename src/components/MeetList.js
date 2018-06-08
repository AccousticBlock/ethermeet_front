import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MeetUp from './MeetUp'

const TableHeadCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  cell: {
    width: '33%',
    textAlign: 'center',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
      textAlign: 'center',
    },
  },
});

function MeetList(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableHeadCell className={classes.cell}>Title</TableHeadCell>
            <TableHeadCell className={classes.cell}>Host Name</TableHeadCell>
            <TableHeadCell className={classes.cell}>Date</TableHeadCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
          <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} />
        </TableBody>
      </Table>
    </Paper>
  );
}

MeetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeetList);