import React from "react";
import "./styles.css";

export default class Tabla extends React.Componet{
     constructor(props){
    super(props)
    this.state={};
    }
    render() {
        return (
     <div class="tablaDiv" id="tablaDiv"> 
        <Busqueda/>
          <table id="tabla">
              <thead>
                  <tr><th>ID</th>
                 <th>Materia</th>
                   <th>Docente</th>
                  <th>Curso</th>
                 <th>Horario</th>
                   <th>Notas</th>
                   <th>Promedio</th>
                 </tr></thead>
            </table>
            </div>

    );
  }
}