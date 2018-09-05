import React, { Component } from 'react';
//Deciding who owns the State
const Timer = ({currentValue, resetTimerFunction}) => {
    return (
      <div className="Timer" onClick={resetTimerFunction}>
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
        <Timer currentValue={this.state.currentValue}
          resetTimerFunction={this.resetTimer}/>
        
      </div>
    );
  }
}

export default App;
