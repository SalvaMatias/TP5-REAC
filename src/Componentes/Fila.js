import React from "react";
import Accion from "./Accion.js";
import "./styles.css";

export default class Filas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <Accion />
        </td>
      </tr>
    );
  }
}
