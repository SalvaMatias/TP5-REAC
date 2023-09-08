import React from "react";
import Accion from "./Accion.js";
import "./styles.css";

export default class Buscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <label>
        <img />
        <input type="text" placeholder="Buscar" />
        <img />
        <img />
      </label>
    );
  }
}