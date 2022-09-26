import FormularioTareas from "./components/FormularioTareas";
import ListaTareas from "./components/ListaTareas";
//importar la hoja de estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Container className="my-5">
    <h1 className="display-4">Lista de Tareas</h1>
    <hr />
    <FormularioTareas></FormularioTareas>
    <ListaTareas></ListaTareas>
    </Container>
    </>
  );
}

export default App;
