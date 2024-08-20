/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const ItemCounter = ({stock, onAdd}) => {

  const [Contador, setContador] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [visible, setVisible] = useState(true);

  const incrementar = () => {
    if(Contador < itemStock){
      setContador(Contador + 1);
    }

  }
  const decrementar = () => {
    if(Contador > 1){
      setContador(Contador - 1);
    }

  }

  const addToCart = () => {
    if (Contador <= itemStock) {
      setItemStock(itemStock - Contador);
      onAdd(Contador);
      setContador(1);
      setVisible(false);     
    }
  }

  useEffect(() =>{
    setItemStock(stock)
  },[stock])

  return (
    <>
    {visible ? 
       <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group">
        <button type="button" className="btn btn-light rounded-start-pill" onClick={decrementar}>
          -
        </button>
        <button type="button" className="btn btn-light">
          {Contador}
        </button>
        <button type="button" className="btn btn-light rounded-end-circle" onClick={incrementar}>
          +
        </button>
      </div>
          </div>
        </div>
        <div className="row my-3 d-flex justify-content-center">
        <button type="button" className="btn btn-success w-75" onClick={addToCart}>
          Añadir al Carrito
        </button>
        </div>
       </div> : <Link to={"/cart"} className="btn btn-success w-75">Terminar mi Conmpra</Link>}       
    </>
  );
};

export default ItemCounter;
