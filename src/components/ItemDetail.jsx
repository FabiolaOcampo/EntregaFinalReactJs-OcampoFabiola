import { useContext } from "react";

import { ItemCounter } from "./ItemCouter";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({item}) => {
    const {onAdd} = useContext(CartContext);



    const add = () => {
        onAdd(item);
    };


    return ( 
    <>
    <h1>{item.title}</h1>
    <img src={item.pictureUrl} width={400} />
    <ItemCounter onAdd ={add}/>
    </>
    );
};
