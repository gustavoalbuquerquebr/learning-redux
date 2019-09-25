import React from "react";
import { connect } from "react-redux";
import { changeColor } from "../actions";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch(changeColor(e.target.value));
  }

  render() {
    const style = { color: this.props.color };
    return (
      <div>
        <h1 style={style}>{this.props.count}</h1>
        <input
          type="color"
          value={this.props.color}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const connectedDisplay = connect((state, props) => ({
  count: state.count,
  color: state.color,
}))(Display);

export default connectedDisplay;
