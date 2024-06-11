"use client";
import { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    const data = localStorage.getItem("productCart");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    if (cartItems !== undefined)
      localStorage.setItem("productCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item.id === itemId))
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    else
      setCartItems(
        cartItems?.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else {
            return item;
          }
        })
      );

    console.log(cartItems);
  };

  const deleteFromCart = (itemId) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.id != itemId;
      })
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((i) => {
        if (i.id === itemId)
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        else return i;
      })
    );
  };

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
