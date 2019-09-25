import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAdd() {
    this.props.dispatch(increment());
  }

  handleMinus() {
    this.props.dispatch(decrement());
  }

  handleInput(e) {
    this.setState({ value: parseInt(e.target.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(increment(this.state.value));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleMinus}>Minus</button>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleInput}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

const connectedButtons = connect((state, props) => ({
  count: state.count,
}))(Buttons);

export default connectedButtons;
