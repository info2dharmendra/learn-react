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
    this.state = {};
  }

  startTimer = () => {

    //console.log('interval start: '+this.interval);
    this.setState({currentValue:this.refs.startInput});

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
        
        <input type="text" ref="startInput"/>
        <button onClick={this.startTimer}>Start</button>
      </div>
    );
  }
}

export default App;
