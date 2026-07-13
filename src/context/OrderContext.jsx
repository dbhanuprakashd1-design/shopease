import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem("orders");
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const createOrder = (cartItems, totalPrice, shippingDetails) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      status: "Processing",
      total: totalPrice,
      shipping: shippingDetails,
      items: cartItems,
    };

    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);