import { createContext, ReactNode, useEffect, useState } from 'react';

export interface CoffeeItemProps {
  id: number;
  title: string;
  tags: string[];
  description: string;
  srcImg: string;
  price: string;
  amount: number;
}

interface AddressData {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface OrderProps {
  id?: number;
  cart: CoffeeItemProps[];
  date: string;
  address: AddressData;
  paymentMethod: string;
  totalPrice: number;
}

interface OrdersContextProps {
  orders: OrderProps[];
  cart: CoffeeItemProps[];
  addCoffeeToCart: (newCartItem: CoffeeItemProps) => void;
  removeCoffeeFromCart: (removedCartItem: CoffeeItemProps) => void;
  createOrder: (order: OrderProps) => Number;
  getOrderById: (id: Number) => OrderProps | undefined;
  productsPrice: number;
  deliveryPrice: number;
  totalPrice: number;
  calculateDeliveryPriceByState: (state: string) => void;
}

export const OrdersContext = createContext({} as OrdersContextProps);

interface OrdersContextProviderProps {
  children: ReactNode;
}

export function OrdersProvider({ children }: OrdersContextProviderProps) {
  const [cart, setCart] = useState<CoffeeItemProps[]>(() => {
    const storedCart = localStorage.getItem("@coffe_delivery:cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [orders, setOrders] = useState<OrderProps[]>(() => {
    const storedOrders = localStorage.getItem("@coffe_delivery:orders");
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [productsPrice, setProductsPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem("@coffe_delivery:cart", JSON.stringify(cart));

    const updatedTotalPrice = cart.reduce((acc, item) => {
      return acc + parseFloat(item.price) * item.amount;
    }, 0);
    setProductsPrice(updatedTotalPrice);

    const updatedTotal = updatedTotalPrice + deliveryPrice;
    setTotalPrice(updatedTotal);
  }, [cart, deliveryPrice]);

  function addCoffeeToCart(newCartItem: CoffeeItemProps) {
    const existingCartItem = cart.find(item => item.id === newCartItem.id);

    if (existingCartItem) {
      // remove the existing item from the cart and add it again with the new amount
      const updatedCart = cart.map(item => {
        if (item.id === newCartItem.id) {
          return newCartItem;
        } else {
          return item;
        }
      });
      setCart(updatedCart);

      if (newCartItem.amount === 0) {
        removeCoffeeFromCart(newCartItem);
      }
    } else {
      const newCart = [...cart, { ...newCartItem }];
      setCart(newCart);
    }
  }

  function removeCoffeeFromCart(removedCartItem: CoffeeItemProps) {
    const existingCartItem = cart.find(item => item.id === removedCartItem.id);

    if (!existingCartItem) return;

    // remove item from cart
    const updatedCart = cart.filter(item => item.id !== removedCartItem.id);
    setCart(updatedCart);
  }

  function createOrder(order: OrderProps) {
    order.id = orders.length + 1;

    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);

    localStorage.setItem("@coffe_delivery:orders", JSON.stringify(updatedOrders));

    setCart([]);

    return order.id;
  }

  function getOrderById(id: Number) {
    return orders.find(order => order.id === id);
  }

  function calculateDeliveryPriceByState(state: string) {
    if (state === "SP") {
      setDeliveryPrice(0);
    } else {
      setDeliveryPrice(15);
    }
  }

  return (
    <OrdersContext.Provider value={{
      cart,
      deliveryPrice,
      orders,
      addCoffeeToCart,
      removeCoffeeFromCart,
      createOrder,
      getOrderById,
      productsPrice,
      totalPrice,
      calculateDeliveryPriceByState
    }}>
      {children}
    </OrdersContext.Provider>
  );
}