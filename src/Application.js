import React, { Component } from 'react';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      overTwentyFive: false
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


  componentDidUpdate(props, state) {
    // console.log("Updated from", state, "to", this.state);
    if ((this.state.count > 25) && (this.state.count !== state.count) && (!this.state.overTwentyFive)) {
      console.log("Updating after Twenty Five");
      this.setState({ overTwentyFive: true });
    }
  }


  render() {
    let { count } = this.state;

    return (
      <div className="App">
        <h1>React Counter Application</h1>

        <h2>You clicked the button {count} times</h2>
        {(this.state.overTwentyFive) ?
          <h3>You have a new High Score of {count}.</h3>
          : <h3>Beat High Score of 25.</h3>

        }
        <span>
          <button onClick={() => this.handleClick()}> Click Me!</button>
        </span>

      </div>
    )
  }
}

export default Application;
