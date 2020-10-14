import React, { Component } from 'react';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


  componentDidUpdate(props, state) {
    console.log("Updated from", state, "to", this.state);
  }


  render() {
    let { count } = this.state;

    return (
      <div className="App">
        <h1>React Counter Application</h1>

        <h2>You clicked the button {count} times</h2>
        <span>
          <button onClick={() => this.handleClick()}> Click Me!</button>
        </span>

      </div>
    )
  }
}

export default Application;
