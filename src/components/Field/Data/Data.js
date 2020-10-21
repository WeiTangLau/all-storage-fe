import React from "react";
import Table from "react-bootstrap/Table";

class Data extends React.Component {
  render() {
    let counter = 0;
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {this.props.resp.map((resp) => (
            <tr>
              <td>{counter++}</td>
              <td>{resp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Data;
