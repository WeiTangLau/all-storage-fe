import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FieldCardValueInput from "./FieldCardValueInput/FieldCardValueInput";
import FieldCardValueExecuteButton from "./FieldCardValueExecuteButton/FieldCardValueExecuteButton";
import "./FieldCardValue.css";

class FieldCardValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InputGroup className="inputGroup">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title={this.props.dropdownTitle}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item
            href="#"
            eventKey="GET"
            onSelect={this.props.onSelectAPIChange}
          >
            GET
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            eventKey="POST"
            onSelect={this.props.onSelectAPIChange}
          >
            POST
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            eventKey="PUT"
            onSelect={this.props.onSelectAPIChange}
          >
            PUT
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            eventKey="DELETE"
            onSelect={this.props.onSelectAPIChange}
          >
            Delete
          </Dropdown.Item>
        </DropdownButton>
        <FieldCardValueInput
          onIndexChange={this.props.onIndexChange}
          onValueChange={this.props.onValueChange}
          dropdownTitle={this.props.dropdownTitle}
          index={this.props.index}
          value={this.props.value}
        />
        <InputGroup.Append>
          <FieldCardValueExecuteButton
            onExecuteSelect={this.props.onExecuteSelect}
          />
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default FieldCardValue;
