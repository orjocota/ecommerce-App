/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card h-100">
          <Link to={"/item/" + item.id}>
            <img
              src={item.image}
              className="card-img-top object-fit-cover"
              alt={item.title}
            />
          </Link>
          <div className="card-body text-center">
            <h5 className="card-title text-uppercase fs-4 fw-bold">
              {item.title}
            </h5>
            <p className="card-text fs-5 my-5">{item.description}</p>
            <p className="card-text fs-4 my-5 fw-bold">${item.price}</p>
            <Link to={"/item/" + item.id}>
              <button type="button" className="btn btn-dark my-1 w-75">
                Ver Detalles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
