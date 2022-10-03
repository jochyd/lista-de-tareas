import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ arregloTareas, borrarTarea }) => {
  return (
    //cuando tengamos muchos hijos hay q agregar el componente key
    <ListGroup>
      {arregloTareas.map((tarea, posicion) => (
        <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea} ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
