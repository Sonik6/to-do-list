import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="container">
      <Header title="To-Do List"></Header>
      <Tasks></Tasks>
    </div>
  );
};

export default App;
