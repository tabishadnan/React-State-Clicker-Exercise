import React, { Component } from 'react';

class Clicker extends Component {

    state = {
        num : 1
    }

    handleClicker = () => {
        
        const randNum = Math.floor(Math.random() * 10) + 1;

        this.setState({
            num : randNum
        });
    }

    render() {
        return (
            <div>
                <h3>Number : {this.state.num}</h3>
                {this.state.num === 7 ? "YOU WIN!" :  <button onClick={this.handleClicker}>Click Me</button>}
            </div>
        );
    }
}

export default Clicker;