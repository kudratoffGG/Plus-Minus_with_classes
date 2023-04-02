import React from "react";
import '../App.css';
import '../own.css';

class ClickCountButton extends React.Component {
  state = {
    count: 0
  };

  onClickPlus() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  onClickMinus() {
    this.setState(state => ({
      count: state.count - 1
    }))
  }
  onClickReturn = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div id="main" className="App">
        <h1> {this.state.count} </h1>

        <button id="plus" onClick={this.onClickPlus.bind(this)} className="btn btn-primary m-1"> + </button>

        <button id="plus" onClick={this.onClickMinus.bind(this)} className="btn btn-success m-1"> - </button>

        <button id="reset" onClick={this.onClickReturn.bind(this)} className="btn btn-warning m-1"> Reset </button>

      </div>


    )
  }
}

export default ClickCountButton;