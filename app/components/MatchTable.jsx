import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Match, Link } from 'react-router';
import { AutoComplete, Avatar, DatePicker, FlatButton, Paper, TextField, RaisedButton }  from 'material-ui/';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import MatchRow from './MatchRow';

const containerStyle = {
  height: 700,
  width: 950,
  margin: '10px auto 0 auto',
  textAlign: 'center',
  display: 'block', // this too
  justifyContent: 'center',
  alignItems: 'center',
  // paddingTop: '200px',
  // marginTop: '400px'
};

const MatchTable = React.createClass({
  render() {
    return (
      <Paper style={containerStyle} zDepth={1}>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn />
              <TableHeaderColumn>Player 1</TableHeaderColumn>
              <TableHeaderColumn>Match Result</TableHeaderColumn>
              <TableHeaderColumn>Player 1 Score </TableHeaderColumn>
              <TableHeaderColumn>Player 2 Score </TableHeaderColumn>
              <TableHeaderColumn>Player 2</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} adjustForCheckbox={false}>
            <MatchRow
              matches={this.props.matches}
              players={this.props.players}
            />
          </TableBody>
        </Table>
      </Paper>
    );
  }
});

export default MatchTable;
