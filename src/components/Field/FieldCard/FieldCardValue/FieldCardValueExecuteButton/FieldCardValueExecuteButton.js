import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

class FieldCardValueExecuteButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button variant="outline-secondary" onClick={this.props.onExecuteSelect}>
        Execute
      </Button>
    );
  }
}

export default FieldCardValueExecuteButton;
