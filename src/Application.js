import React, { Component } from 'react';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(props, state) {

  }

  componentDidMount(props, state) {
    console.log("Mounted with", props, state);
  }

  componentWillReceiveProps(props) {

  }

  componentWillUpdate(props, state) {
    if (this.props.name !== props.name) {
      //do something
    }

  }

  componentDidUpdate(props, state) {

  }

  render() {
    let name = "Dipendra";

    return (
      <div className="App">
        <h1> Hello <i>{name}</i> from Class Component</h1>

      </div>
    )
  }
}

export default Application;
