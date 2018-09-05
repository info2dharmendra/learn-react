import React, { Component } from 'react';

//Mounting/Unmounting lifecycle methods

class Greeting extends Component{
  componentWillMount() {
    console.log('In componentWillMount');
    debugger;
  }

  componentDidMount() {
    console.log('In componentDidMount');
    debugger;
  }

  componentWillReceiveProps() {
    console.log('In componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('In shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('In componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('In componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('In componentWillUnMount');
  }

  render(){
    return(
      <div>
        Hello
      </div>
    );
  }

}
class App extends Component {

  constructor(props){
    super(props);
    this.state = {showGreeting : true};
    
    setTimeout(() =>{
        this.setState({showGreeting : false});
      },5000
    );
  }

    
  render() {
    console.log('In App');
    return (
      <div className="App">
        {this.state.showGreeting && <Greeting/>}
      </div>
    );
  }
}

export default App;
