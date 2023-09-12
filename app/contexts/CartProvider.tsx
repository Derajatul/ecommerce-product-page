"use client"

import { createContext, useContext, useState } from 'react'

export const CartContext = createContext<{
  cart: Product[];
  handleCart: (cart: Product[]) => void;
}>({ cart: [], handleCart: () => {} });

interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  img: string;
  // tambahkan properti lain sesuai kebutuhan
}

export const CartProvider = ({children}:{children:React.ReactNode}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const handleCart = (newCart: Product) => {
  setCart((prevCart) => [...prevCart, newCart]);
}
  return(
    <CartContext.Provider value={{cart, handleCart}}>
      {children}
    </CartContext.Provider>
  )
}
export const useCart = () => {
  return useContext(CartContext)
}