import { createContext, useState } from "react";

export const CarContext = createContext();

// eslint-disable-next-line react/prop-types
const CarContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const product = cart.find((prod) => prod.id == item.id);
      product.quantity += quantity;
      setCart([...cart]);
    } else setCart([...cart, { ...item, quantity: quantity }]);
  };

  const removeItem = (id) => {
    const items = cart.filter((item) => item.id !== id);
    setCart([...items]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const totalItems = () => {
    return cart.reduce((acum, item) => acum += item.quantity, 0);    
  };

  const sumaProductos = () =>{
    return cart.reduce((acum, item) => acum += item.price * item.quantity, 0);
  }


  return (
    <CarContext.Provider value={{ cart, addItem, removeItem, clear, totalItems, sumaProductos}}>
      {children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
