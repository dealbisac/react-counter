import React, { Component } from 'react';

class HighScore extends Component {
    render() {
        if (this.props.overTwentyFive) {
            return (
                <div>
                    <h3>You have beaten High Score of 25.</h3>

                    <button onClick={this.props.onReset}> Play Again.</button>
                    <br />
                </div>
            )
        } else {
            return (null)
        }

    }

}

export default HighScore;