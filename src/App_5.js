import React, { Component } from 'react';
//Controlled components
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
    this.state = {startValue: ''};
  }

  resetTimer = () => {
    this.setState({currentValue: 150});
  }

  stopTimer = () => {
    console.log('interval stop: '+this.interval);
    clearInterval(this.interval);
  }

  startTimer = () => {

    //console.log('interval start: '+this.interval);
    this.setState({
      currentValue: Number(this.state.startValue)
    });

    setInterval(() => {
      this.setState({currentValue: this.state.currentValue - 1});
    }, 1000);
  }

  handleInputChange = (event) => {
    this.setState({
      startValue : event.target.value
    });
  }
  
  render() {
    console.log('In App');
    return (
      <div className="App">
        <Timer currentValue={this.state.currentValue}
          resetTimerFunction={this.resetTimer}/>
        
        <input type="text" value={this.state.startValue} onChange={this.handleInputChange}/>
        <button onClick={this.startTimer}>Start</button>
      </div>
    );
  }
}

export default App;
