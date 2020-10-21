import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FieldCardValue from "./FieldCard/FieldCardValue/FieldCardValue";
import Data from "./Data/Data";

import "./Field.css";

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownTitle: "Select API",
      index: "",
      value: "",
      resp: [],
    };
  }

  onIndexChange = (e) => {
    console.log(e.target.value);
    this.setState({ index: e.target.value });
  };

  onValueChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  onSelectAPIChange = (e) => {
    this.setState({ dropdownTitle: e });
  };

  onExecuteSelect = (e) => {
    if (this.state.dropdownTitle === "GET") {
      if (this.state.index === "") {
        fetch("https://all-storage-20000.et.r.appspot.com/store", {
          method: "get",
        })
          .then((resp) => resp.json())
          .then((stores) => {
            if (stores === "") {
              this.setState({ resp: ["the list is empty"] });
            }
            console.log(stores);
            this.setState({ resp: stores });
          });
      } else {
        fetch(
          "https://all-storage-20000.et.r.appspot.com/store/" +
            this.state.index,
          {
            method: "get",
          }
        )
          .then((resp) => resp.json())
          .then((stores) => {
            let arr = [];
            arr.push(stores);
            this.setState({ resp: arr });
          })
          .catch((error) => {
            console.error("Error:", error);
            this.setState({ resp: ["the index is invalid"] });
          });
      }
    } else if (this.state.dropdownTitle === "POST") {
      if (this.state.index === "") {
        fetch(
          "https://all-storage-20000.et.r.appspot.com/store/" +
            this.state.value,
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((resp) => resp.text())
          .then((stores) => {
            console.log(stores);
            let arr = [];
            arr.push(stores);
            this.setState({ resp: arr });
          });
      } else {
        fetch(
          "https://all-storage-20000.et.r.appspot.com/store/" +
            this.state.index +
            "/" +
            this.state.value,
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((resp) => resp.text())
          .then((stores) => {
            console.log(stores);
            let arr = [];
            arr.push(stores);
            this.setState({ resp: arr });
          });
      }
    } else if (this.state.dropdownTitle === "PUT") {
      if (this.state.index === "") {
        fetch(
          "https://all-storage-20000.et.r.appspot.com/store/" +
            this.state.value,
          {
            method: "put",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((resp) => resp.text())
          .then((stores) => {
            console.log(stores);
            let arr = [];
            arr.push(stores);
            this.setState({ resp: arr });
          });
      } else {
        fetch(
          "https://all-storage-20000.et.r.appspot.com/store/" +
            this.state.index +
            "/" +
            this.state.value,
          {
            method: "put",
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((resp) => resp.text())
          .then((stores) => {
            console.log(stores);
            let arr = [];
            arr.push(stores);
            this.setState({ resp: arr });
          });
      }
    } else if (this.state.dropdownTitle === "DELETE") {
      if (this.state.index === "") {
        fetch("https://all-storage-20000.et.r.appspot.com/store", {
          method: "delete",
        })
          .then((resp) => resp.text())
          .then((stores) => {
            if (stores === "") {
              this.setState({ resp: ["the list is empty"] });
            }
            console.log(stores);
            this.setState({ resp: [stores] });
          })
          .catch((error) => {
            console.error("Error:", error);
            this.setState({ resp: ["the index is invalid"] });
          });
      } else if (this.state.index === "all") {
        fetch("https://all-storage-20000.et.r.appspot.com/store/all", {
          method: "delete",
        })
          .then((resp) => resp.text())
          .then((stores) => {
            this.setState({ resp: [stores] });
          });
      } else {
        fetch(
          "https://all-storage-20000.et.r.appspot.com/store/" +
            this.state.index,
          {
            method: "delete",
          }
        )
          .then((resp) => resp.text())
          .then((stores) => {
            let arr = [];
            arr.push(stores);
            this.setState({ resp: arr });
          })
          .catch((error) => {
            console.error("Error:", error);
            this.setState({ resp: ["the index is invalid"] });
          });
      }
    }
  };

  render() {
    return (
      <section className="field">
        <FieldCardValue
          onIndexChange={this.onIndexChange}
          onValueChange={this.onValueChange}
          onExecuteSelect={this.onExecuteSelect}
          onSelectAPIChange={this.onSelectAPIChange}
          dropdownTitle={this.state.dropdownTitle}
          index={this.state.index}
          value={this.state.value}
        />
        <Data resp={this.state.resp} />
      </section>
    );
  }
}

export default Field;
