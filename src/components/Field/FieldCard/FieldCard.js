import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import FieldCardValue from "./FieldCardValue/FieldCardValue";

const FieldCard = (props) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <h4>{props.title}</h4>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <FieldCardValue />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default FieldCard;
