
import { Form, Button } from 'react-bootstrap';

const FormularioTareas = () => {
    return (
        <>
       <Form className='my-5'>
       <Form.Group className='mb-b d-flex' controlId='formTarea'>
        {/* {este es el input} */}
        <Form.Control type='text' placeholder='Ingresa Tu Tarea'></Form.Control>
        <Button variant='primary' type='submit'>
            Enviar
        </Button>
       </Form.Group>
       </Form>
        </>
    );
};

export default FormularioTareas;