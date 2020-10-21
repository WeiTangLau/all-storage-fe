import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Field from "./components/Field/Field";

function App() {
  return (
    <section className="App">
      <NavigationBar />
      <Field />
    </section>
  );
}

export default App;
