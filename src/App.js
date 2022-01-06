import logo from './logo.svg';
import './App.css';
import React from 'react';
import { client } from './client';

const MAX = 500;

export default class App extends React.Component {
  state = {
    progressValue: 0,
    lastUpdate: Date.now()
  }
  componentDidMount() {
    client.connect();
    client.on("message", (channel, tags, message, self) => {
      if (message === "KEKW" && this.state.progressValue < MAX) {
        this.setState({
          ...this.state,
          progressValue: this.state.progressValue + 1,
          lastUpdate: Date.now()
        })
        setTimeout(() => {
          this.setState({
            ...this.state,
            progressValue: this.state.progressValue - 1
          })
        }, 5000)
      }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <progress id="cringe" value={this.state.progressValue} max={MAX}></progress>
      </div>
    );
  }
}