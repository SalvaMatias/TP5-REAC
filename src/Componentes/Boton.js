import React from "react"
import "./styles.css";

export default class Boton extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <span class="boton" onclick="guardarDatos()">Guardar</span>
    )
  }
}