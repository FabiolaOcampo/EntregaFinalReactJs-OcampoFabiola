import {useContext, useState } from "react";
import { Container, Table } from "react-bootstrap";
import {Button} from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap/Form';
import {CartContext } from "../contexts/CartContext";

import{
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore";
import {  useNavigate } from "react-router-dom";

const initialValues ={
    name: "",
    phone:"",
    email:"",
};

export const Cart = () =>{
    const {clear, items, onRemove} = useContext (CartContext);
    const [buyer, setBuyer] = useState(initialValues);


    const navigate = useNavigate ();

    const total = items.reduce(
      (acumulador, valorActual) =>
       acumulador + valorActual.quantity * valorActual.price,
      0
  );

    const handleChange = (event) => {
        setBuyer(buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value,
            };
        });
    };

    const sendOrder = () => {
      
      if (!buyer.name || !buyer.email || !buyer.phone) {
        return;
      }
      
    
        const order = {
          buyer,
          items,
          total: 13600,
        };
    
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
        setBuyer(initialValues);
        clear();
      }
    });
  };
    


    if (!items.length){

        return (
        <Container className='mt-4'>
            <h1>Tu carrito de compras está vacío.</h1>
            <button onClick={() => navigate("/.")}>Volver al Inicio</button>
            </Container>
        )
    }

    return (
    <Container className='mt-4'>
        <h1>Carrito de compras</h1>
        <Table striped="columns">
      <thead>
        <tr>
        <th>Producto</th>
          <th>Unidades</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
      {items?.map(item=> ( 
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td><img src={item.pictureUrl} width={300}/></td>
          <td>${item.price}</td>
          <td onClick={() => onRemove(item.id)}>X</td>
        </tr>
        ))} 
      </tbody>
      <tfoot>
        <tr>
            <td>Total: ${total}</td>
        </tr>
      </tfoot>
    </Table>
        <button onClick={clear}>Vaciar carrito</button>
    <hr></hr>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su dirección de email" value={buyer.email} onChange={handleChange} name="email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" value={buyer.name} onChange={handleChange} name="name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su número de teléfono" value={buyer.phone} onChange={handleChange} name="phone"  />
      </Form.Group>
      <Button variant="primary"  onClick={sendOrder} disabled={!buyer.name || !buyer.email || !buyer.phone} >
        Enviar
      </Button>

    </Form>
 
    </Container>
    );
};
