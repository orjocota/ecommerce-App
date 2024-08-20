import "../index.css";
import { useContext } from "react";
import { CarContext } from "./CartContex";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, totalItems, clear, sumaProductos } = useContext(CarContext);
  
  if (totalItems() == 0) {
    return (
      <>
        <div className="container my-5">
          <h2 className="title">Carrito de Compras</h2>
          <div className="row align-middle text-center">
            <div className="col">
              <p>
                <img src="../Imagenes/bag.svg" width={100} />
              </p>
              <h2> TU Carrito esta Vacio</h2>
              <p className="fs-5 fw-bold">
                Añade productos al carrito para ver su contenido.
              </p>
              <Link to="/" className="btn btn-success w-50 fs-5">
                Ir a la Pagina Principal
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="container">
      <h2 className="title">Carrito de Compras</h2>
      <div className="row">
        <div className="col">
          <table className="table">
            <tbody>
              <tr>
                <td colSpan={3}>
                  <Link to="/productos">
                    <button
                      type="button"
                      className="btn btn-light text-uppercase fw-bold my-1 w-50 fs-5"
                    >
                      Seguir Comprando
                    </button>{" "}
                  </Link>
                </td>
                <td className="align-middle text-end" colSpan={3}>
                  <button
                    className="btn btn-light text-uppercase fw-bold my-1 w-75 fs-5"
                    onClick={() => {
                      clear();
                    }}
                  >
                    <img
                      src="../Imagenes/Trash.svg"
                      alt="Elimnar Productos"
                      width={24}
                    />{" "}
                    Vaciar el Carrito
                  </button>
                </td>
              </tr>
              <tr>
                <th className="text-center align-content-center fw-bold fs-5 text-bg-success">
                  Producto
                </th>
                <th className="text-center align-content-center fw-bold fs-5 text-bg-success">
                  Cantidad
                </th>
                <th className="text-center align-content-center fw-bold fs-5 text-bg-success">
                  Nombre
                </th>
                <th className="text-center align-content-center fw-bold fs-5 text-bg-success">
                  Precio
                </th>
                <th className="text-center align-content-center fw-bold fs-5 text-bg-success">
                  Total
                </th>
                <th className="text-center align-content-center fw-bold fs-5 text-bg-success">
                  Eliminar
                </th>
              </tr>
              {cart.map((p) => {
                return (
                  <tr key={p.id}>
                    <td className="text-center align-content-center fw-bold">
                      <img src={p.image} alt={p.title} width={120} />
                    </td>
                    <td className="text-center align-content-center fw-bold">
                      {p.quantity}
                    </td>
                    <td className="text-center align-content-center fw-bold">
                      {p.title}
                    </td>
                    <td className="text-center align-content-center fw-bold">
                      $ {p.price}
                    </td>
                    <td className="text-center align-content-center fw-bold">
                      $ {p.price * p.quantity}
                    </td>
                    <td className="text-center align-content-center fw-bold">
                      <button className="btn btn-light">
                        <img
                          src="../Imagenes/Trash.svg"
                          alt="Elimnar Productos"
                          width={24}
                          onClick={() => {
                            removeItem(p.id);
                          }}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td
                  className="text-center align-content-center fw-bold fs-3 text-success"
                  colSpan={3}
                >
                  Total a Pagar
                </td>
                <td className="text-center align-content-center">&nbsp;</td>
                <td className="text-center align-content-center fw-bold fs-3 text-success">
                  $ {sumaProductos()}
                </td>
                <td className="text-center align-content-center">&nbsp;</td>
              </tr>
              <tr>
                <td className="align-middle text-center" colSpan={6}>
                  <Link to={"/Checkout"} className="btn btn-light text-uppercase fw-bold w-50 my-1 fs-5">
                    Finalizar Compra
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
