import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

class FieldCardValueInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.dropdownTitle === "GET") {
      return (
        <div>
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="index"
            onChange={this.props.onIndexChange}
          />
        </div>
      );
    } else if (this.props.dropdownTitle === "POST") {
      return (
        <div>
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="index"
            onChange={this.props.onIndexChange}
          />
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="value"
            onChange={this.props.onValueChange}
          />
        </div>
      );
    } else if (this.props.dropdownTitle === "PUT") {
      return (
        <div>
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="index"
            onChange={this.props.onIndexChange}
          />
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="value"
            onChange={this.props.onValueChange}
          />
        </div>
      );
    } else if (this.props.dropdownTitle === "DELETE") {
      return (
        <div>
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="index"
            onChange={this.props.onIndexChange}
          />
        </div>
      );
    } else {
      return (
        <div>
          <FormControl aria-describedby="basic-addon1" disabled={true} />
        </div>
      );
    }
  }
}

export default FieldCardValueInput;
