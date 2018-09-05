import React, { Component } from 'react';
//Reading and updating the State
class Timer extends Component{
  constructor(props){
    super(props);
    this.state = {currentValue: this.props.startWith};

    setTimeout(() => {
      this.setState({currentValue: this.state.currentValue - 1});
    }, 1000);

    // setInterval(() => {
    //   this.setState({currentValue: this.state.currentValue - 1});
    // }, 1000);
  }

  render() {
    console.log('In Timer');
    return (
      <div className="Timer">
        {this.state.currentValue}
      </div>
    );
  }
}

class App extends Component {
  render() {
    console.log('In App');
    return (
      <div className="App">
        <Timer startWith={140}/>
      </div>
    );
  }
}

export default App;
