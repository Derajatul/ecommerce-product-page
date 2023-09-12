"use client"

import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}:{children:React.ReactNode}) => {
  const [cart,setCart] = useState([])
  const handleCart = (cart:number) => {
    setCart(cart)
  }
  return(
    <CartContext.Provider value={{cart,handleCart}}>
      {children}
    </CartContext.Provider>
  )
}
export const useCart = () => {
  return useContext(CartContext)
}