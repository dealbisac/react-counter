import React, { Component } from 'react';
import './Application.css';
import HighScore from './HighScore';

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

  resetCount = (e) => {
    //console.log("Event is", e);
    this.setState({
      count: 0,
      overTwentyFive: false
    })
  }


  render() {
    let { count } = this.state;

    return (
      <div className="App">
        <h1>React Counter Application</h1>
        <p>Beat the Hidden High Score by Clicking the Button</p>

        <h2>You clicked the button {count} times</h2>
        <HighScore
          overTwentyFive={this.state.overTwentyFive}
          onReset={this.resetCount}
        />
        <span>
          <button onClick={() => this.handleClick()}> Click Me!</button>
        </span>

      </div>
    )
  }
}

export default Application;
