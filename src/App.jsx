import FormularioTareas from "./components/FormularioTareas";
//importar la hoja de estilos
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="my-5">
        <h1 className="display-4">Lista de Tareas</h1>
        <hr />
        <FormularioTareas></FormularioTareas>
      </Container>
    </>
  );
}

export default App;
