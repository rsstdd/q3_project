import { BrowserRouter } from 'react-router';
import Header from './Header';
import Main from './Main';

import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = React.createClass({

  getInitialState() {
    return {

      isLoggedIn: false,

      playerId: 0,

      players: [],

      player: []

    };
  },

  componentDidMount() {
    axios.get('/api/token')
      .then((res) => {
        this.setState({ isLoggedIn: res.data });
      })
      .catch((err) => {
        this.setState({ loadErr: err });
      });
  },

  handleAuthenticateUser(bool) {
    this.setState({ isLoggedIn: bool });
  },

  handleSignUpPlayer(id) {
    this.setState({ playerId: id });
  },

  handleGetUserId(email) {
    axios.get('/api/players')
      .then((res) => {
        const players = res.data;
        const id = res.data.filter((obj) => {
          return obj.email === email;
        })[0].id;

        console.log(id);

        this.setState({ isLoggedIn: true });
        this.setState({ playerId: id });

        const player = players.map((obj) => {
          return {
            email: obj.email,
            password: obj.password,
            firstName: obj.firstName,
            lastName: obj.lastName,
            age: obj.age,
            country: obj.country,
            bio: obj.bio,
            imgUrl: obj.imgUrl
          };
        });

        this.setState({ players: player });
      })
      .then((id) => {
        console.log(id);
        axios.get(`api/player/${this.state.playerId}`)
          .then((res) => {
            console.log("########## HANDLE GET USER ID ########");
            const player = res.data;
            console.log(player);
            this.setState({ player: player });
          })
      })
      .catch((err) => {
        console.log(err);
      });
  },

  render() {
    console.log(this.state.isLoggedIn, 'isLoggedIn');
    console.log(this.state.playerId, 'playerId');
    console.log(this.state.players, 'players');
    console.log(this.state.player, 'player');

    return (
      <BrowserRouter >
        <div>
          <Header />
          <Main
            handleAuthenticateUser={this.handleAuthenticateUser}
            handleSignUpPlayer={this.handleSignUpPlayer}
            handleGetUserId={this.handleGetUserId}
            isLoggedIn={this.state.isLoggedIn}
            player={this.state.player}
            playerId={this.state.playerId}
            players={this.state.players}
          />
        </div>
      </BrowserRouter>
    );
  }
});

export default App;
