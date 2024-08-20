import { useContext, useState } from "react";
import { CarContext } from "./CartContex";
import { Link } from "react-router-dom";
import { addDoc, getFirestore } from "firebase/firestore";
import "../index.css"

const Checkin = () => {
  const { cart, totalItems, sumaProductos } = useContext(CarContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ordeId, setOrderId] = useState("");

   if (nombre == "") {
     return false;
   }
  if (email == "") {
     return false;
   }
   if (telefono == "") {
     return false;
   }

  const order = {
    buyer: { name: nombre, phone: telefono, email: email },
    items: cart.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price
    })),
    total: sumaProductos,
  };
 
  const db = getFirestore();
  const collection = collection(db, "Orders");
  addDoc(collection, order).then((i) => {
    setOrderId(i.id);
  });


  if (totalItems() == 0) {
    return (
      <>
        <div className="container my-5">
          <h2 className="title">CHECKOUT</h2>
          <div className="row aling-middle text-center">
            <div className="col">
              <p><img src="../../dist/assets/bag.svg" width={100} /></p>
              <h2> TU Carrito esta Vacio</h2>
              <p className="fs-5 fw-bold">Añade productos al carrito para ver su contenido.</p>
              <Link to="/" className="btn btn-success w-50 fs-5">Ir a la Pagina Principal</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  return (
      <div className="container my-5">
        <h2 className="title">CHECKOUT</h2>
        <div className="row">
          <div className="col">
            <form>
              <div className="text-center fs-bold">
                <h2>Datos Personales para la Compra</h2>
              </div>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input type="number" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
              </div>
              <button type="button" className="btn btn-primary">Generar Orden de Compra</button>
            </form>
          </div>
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <th className="text-center aling-content-center fw-bold fs-5 text-bg-success">Producto</th>
                  <th className="text-center aling-content-center fw-bold fs-5 text-bg-success">Cantidad</th>
                  <th className="text-center aling-content-center fw-bold fs-5 text-bg-success">Nombre</th>
                  <th className="text-center aling-content-center fw-bold fs-5 text-bg-success">Precio</th>
                  <th className="text-center aling-content-center fw-bold fs-5 text-bg-success">Total</th>
                </tr>
                {cart.map((p) => {
                  return (
                    <tr key={p.id}>
                      <td className="text-center aling-content-center fw-bold"><img src={p.image} alt={p.title} width={80} /></td>
                      <td className="text-center aling-content-center fw-bold">{p.quantity}</td>
                      <td className="text-center aling-content-center fw-bold">{p.title}</td>
                      <td className="text-center aling-content-center fw-bold">$ {p.price}</td>
                      <td className="text-center aling-content-center fw-bold">$ {p.price * p.quantity}</td>
                    </tr>
                  );
                })}
                    <tr>
                      <td className="text-center aling-content-center fw-bold fs-3 text-success" colSpan={2}>Total a Pagar</td>
                      <td className="text-end aling-content-center fw-bold fs-3 text-success" colSpan={3}>$ {sumaProductos()}</td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            {ordeId ? (
              <div className="alert alert-light p-5" role="alert">
                <h3>Gracias por tu compra</h3>
                <p>
                  Tu Numero de Orden es: <b>{ordeId}</b>
                </p>
              </div>
            ) : ""}
          </div>
        </div>
      </div>
  );
};

export default Checkin;
