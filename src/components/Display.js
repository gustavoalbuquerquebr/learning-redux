import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}

const connectedDisplay = connect((state, props) => ({
  count: state.count,
}))(Display);

export default connectedDisplay;
