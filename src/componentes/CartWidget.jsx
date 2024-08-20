import "./stylecartW.css";
import { CarContext } from "./CartContex";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const {totalItems} = useContext(CarContext);

  if (totalItems() > 0){
    return (
      <Link to={"/cart"} className="cart">
        <box-icon name="cart"></box-icon>
        <span className="numero__carro">{totalItems()}</span>
      </Link>
    );
  }
};

export default CartWidget;
