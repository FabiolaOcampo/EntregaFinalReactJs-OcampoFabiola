import { useState } from "react";

export const ItemCounter = ({onAdd, stock, initial}) => {
  const [count, setCount] = useState(initial);

  const handleIncreaseCount = () => {
    if(stock >= count + 1){
    setCount ((prev) => prev + 1);
  }
  };
  const handleDecreaseCount = () => {
    if(stock > 1){
    setCount ((prev) => prev - 1);
  }
  };

  const handleAdd = () => {
    if (count >= 1 && count <= stock) {
      onAdd(count);
      setCount(initial);
    } else {
      alert("La cantidad debe ser mayor o igual a 1");
    }
  };



  return (
    <>
    <br></br>
  <div style={{display:"flex"}}>
  <button onClick={handleDecreaseCount}>-</button>
  <mark> {count}</mark> 
  <button onClick={handleIncreaseCount} >+</button>
  </div>
  <br></br>
  <button onClick={handleAdd}>Añadir al carrito</button>
  
  
 
  </>
  );
};