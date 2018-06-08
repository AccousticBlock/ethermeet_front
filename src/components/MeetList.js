import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
  },
  table: {
    minWidth: 700,
  },
  cell: {
    width: '33.33%',
    textAlign: 'center',
    flexBasis: '33.33%',
    flexShrink: 0,
    fontSize: theme.typography.pxToRem(15),
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
            <TableHeadCell className={classes.cell}><p>Title</p></TableHeadCell>
            <TableHeadCell className={classes.cell}>Host Name</TableHeadCell>
            <TableHeadCell className={classes.cell}>Date</TableHeadCell>
          </TableRow>
        </TableHead>
      </Table>
      <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} desc={'desc desc desc desc desc desc desc desc'} />
      <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} desc={'desc desc desc desc desc desc desc desc'} />
      <MeetUp title={'title1'} name={'june'} date={'2015-01-12'} desc={'desc desc desc desc desc desc desc desc'} />
    </Paper>
  );
}

MeetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeetList);