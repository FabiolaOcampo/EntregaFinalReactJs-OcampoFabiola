import { useContext } from "react";


import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({item}) => {
    const {onAdd} = useContext(CartContext);



    const add = (quantity) => {
        onAdd(item, quantity);
    };


    return ( 
    <>
    
    <img src={item.pictureUrl} 
    style={{ width:"25rem", height: "fit-content"}}
    />
    <div>
    <h1>{item.title}</h1>
        <p>{item.description}</p>
        <h4>Valor: ${item.price}</h4>
        <p>Unidades disponibles: {item.stock}</p>
        <ItemCounter onAdd ={add} stock={item.stock} initial={1}/>
    </div>
    
    </>
    );
};
