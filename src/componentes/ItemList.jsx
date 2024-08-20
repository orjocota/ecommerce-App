/* eslint-disable react/prop-types */
import Item from "./Item.jsx";

const ItemList = ({items}) => {  
  return (
    <>
      {items.map((producto) => (
        <Item key={producto.id} item={producto} />
      ))}
    </>
  );
};

export default ItemList;
