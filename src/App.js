import React from 'react';
import './App.css';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  increment () {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement () {
    this.setState({
        counter: this.state.counter - 1
      });
  }

  render() {
    let counter = this.state.counter;
    let color = counter > 0
      ? 'green' : counter < 0
        ? 'red' : 'black';

    return(
      <section className='container'>
        <button onClick={this.decrement.bind(this)}>-</button>
        <p style={{color: color}} >{(counter)}</p>
        <button onClick={this.increment.bind(this)}>+</button>
      </section>
    )
  }

}

export default App;
