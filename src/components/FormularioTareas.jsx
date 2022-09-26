import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  //buscar las tareas del localstorage si es que existe
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];

  //aqui guardamos la tarea (en este state)
  const [tarea, setTarea] = useState("");
  //aqui guardamos el arreglo con las tareas
  const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);

  //Aqui se escribe el ciclo de vida asi se escribe para el montaje unicamente.
  useEffect(() => {
    //guardar el arreglo de las tareas en localstorage
    localStorage.setItem("listaTareas", JSON.stringify(arregloTareas));
    //traer los datos del localstorage
  }, [arregloTareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //arregloTareas.push(); no se puede usar el push en un statee porrq lo estariamos modificando al state
    setArregloTareas([...arregloTareas, tarea]); //leer documentacion xpresss
    //limpiar el input
    setTarea("");
  };
  const borrarTarea = (nombre) => {
    let arregloModificado = arregloTareas.filter((item) => item !== nombre);
    //actualizar el state
    setArregloTareas(arregloModificado);
  };
  return (
    <>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-b d-flex" controlId="formTarea">
          {/* {este es el input} */}
          <Form.Control
            type="text"
            placeholder="Ingresa Tu Tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          ></Form.Control>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas
        arregloTareas={arregloTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </>
  );
};

export default FormularioTareas;
