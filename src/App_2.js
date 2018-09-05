import React, { Component } from 'react';
//Deciding who owns the State
const Timer = ({currentValue}) => {
    return (
      <div className="Timer">
        {currentValue}
      </div>
    );
  }

class App extends Component {

  constructor(props){
    super(props);
    this.state = {currentValue: 150};

    // setTimeout(() => {
    //   this.setState({currentValue: this.state.currentValue - 1});
    // }, 1000);

    this.interval = setInterval(() => {
      this.setState({currentValue: this.state.currentValue - 1});
    }, 1000);

    console.log('interval: '+this.interval);
  }

  resetTimer = () => {
    this.setState({currentValue: 150});
  }

  stopTimer = () => {
    console.log('interval stop: '+this.interval);
    clearInterval(this.interval);
  }

  startTimer = () => {

    console.log('interval start: '+this.interval);

    setInterval(() => {
      this.setState({currentValue: this.state.currentValue - 1});
    }, 1000);
  }
  
  render() {
    console.log('In App');
    return (
      <div className="App">
        <Timer currentValue={this.state.currentValue}/>
        <button onClick={this.resetTimer}>Reset</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
        <button onClick={this.startTimer}>Start Timer</button>
      </div>
    );
  }
}

export default App;
