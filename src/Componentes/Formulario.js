import React from "react"

import "./styles.css";

export default class Boton extends React.Component{
  constructor(props){
super(props)
this.state = {};
  }

render (){  
return(
  <div class="formulario" id="formularioDiv">
    <form class="form" id="form">
      <Input/>
      <Input/>
      <Input/>
      <Input/>
    </form>
  </div>
    );
    }
  }
   