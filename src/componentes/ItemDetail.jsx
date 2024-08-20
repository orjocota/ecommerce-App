/* eslint-disable react/prop-types */
import ItemCounter from "./ItemCounter";
import "./styleitemlistcontainer.css";
import { Link } from "react-router-dom";
import { CarContext } from "./CartContex";
import { useContext } from "react";

const ItemDetail = ({ props }) => {
  const { addItem } = useContext(CarContext);

  const onAdd = (quantity) => {
    addItem(props, quantity);
  };

  return (
    <div className="container mx-auto pt-5 ">
      <h1 className="title"> PRODUCTOS </h1>
      <div className="row text-center justify-content-center">
        <div className="col-md-4">
          <img
            src={props.image}
            alt={props.title}
            className="img-fluid rounded-4"
          />
        </div>
        <div className="col-md-4">
          <h2>
            <strong>{props.title}</strong>
          </h2>
          <p>{props.description}</p>
          <p>
            Precio: <strong>${props.price}</strong>
          </p>
          <ItemCounter stock={props.stock} onAdd={onAdd} />
          <Link to={"/productos"}>
            <button type="button" className="btn btn-dark my-1 w-75">
              Regresar a los Productos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
