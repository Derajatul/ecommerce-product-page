"use client"
import Image from 'next/image'
import { useState } from 'react'

import {Chip} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useCart} from './contexts/CartProvider';


export default function Home() {
  const {cart,handleCart} = useCart()
  const [amount,setAmount] = useState(1)
  return(
    <>
    
      
    <div>
      <div className="p-6 flex-1">
        <h3 className="text-xs mb-6 text-orange font-bold sm:text-sm">SNEAKER COMPANY</h3>
        <h2 className="text-2xl mb-6 font-bold sm:text-5xl">Fall Limited Edition Sneakers</h2>
        <p className="text-darkGrayishBlue mb-6">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="flex gap-5 items-center mb-6">
          <h2 className="text-2xl font-bold sm:text-3xl">$125.00</h2>
          <Chip color="primary" variant="flat">50%</Chip>
        </div>
        <div className="flex justify-between mb-6">
          <Button
            isIconOnly
            color="primary"
            variant="flat"
            onClick={() => {
              if (amount > 1) {
                setAmount(amount - 1);
              }
            }}
          >
            -
          </Button>
          <span>{amount}</span>
          <Button isIconOnly color="primary" variant="flat" onClick={() => setAmount(amount + 1)}>+</Button>
        </div>
        <Button 
          fullWidth 
          color="primary"
          onClick={() => handleCart([
            ...cart,
            {product: "Fall Limited Edition Sneakers", price: 125 * amount,amount:amount,img: "/img/image-product-1-thumbnail.jpg"}
          ])}
          >
            Add to cart
        </Button>
      </div>
    </div>
    </>
  )
}

// export default function Home() {
//   const [image,setImage] = useState(1)

//   const renderImages = () => {
//     const images = []
//     for(let i = 1;i<=4;i++){
//       images.push(
//         <div key={i} >
//           <Image src={`/img/image-product-${i}.jpg`} width={60} height={60} alt="" className="rounded-xl"/>
//         </div>
//       )
//     }
//     return images
//   }
  
//   return (
//     <>
//       <div className="flex">
//         <div>
//           <Image src={`/img/image-product-${image}.jpg`} width={300} height={300} alt="" className="rounded-xl" />
//           <div className="flex gap-5 mt-5">
//             {renderImages()}       
//           </div>
//         </div>
        
//       </div>
      
//     </>
//   )
// }
