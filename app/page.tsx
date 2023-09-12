"use client"
import Image from 'next/image'
import { useState } from 'react'

import {Chip} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useCart} from './contexts/CartProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swal from 'sweetalert2'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


export default function Home() {
  const {cart, handleCart} = useCart()
  const [amount,setAmount] = useState(1)
  return(
    <>
      
      <div className="lg:inline-block sm:w-[425px] lg:col-span-1">
        <Swiper navigation modules={[Navigation]} className="mySwiper sm:rounded-xl" >
          <SwiperSlide>
            <Image src="/img/image-product-1.jpg" width={300} height={300} style={{width:'100%',height:'auto'}} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/image-product-2.jpg" width={300} height={300} style={{width:'100%',height:'auto'}} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/image-product-3.jpg" width={300} height={300} style={{width:'100%',height:'auto'}} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/image-product-4.jpg" width={300} height={300} style={{width:'100%',height:'auto'}} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div className="lg:inline-block lg:w-[425px] lg:col-span-1 lg:mt-10">
        <div className="p-6 lg:p-0">
          <h3 className="text-xs mb-6 text-orange font-bold sm:text-sm">SNEAKER COMPANY</h3>
          <h2 className="text-2xl mb-6 font-bold sm:text-5xl">Fall Limited Edition Sneakers</h2>
          <p className="text-darkGrayishBlue mb-6">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div className="flex gap-5 items-center mb-6">
            <h2 className="text-2xl font-bold sm:text-3xl">$125.00</h2>
            <Chip color="primary" variant="flat">50%</Chip>
          </div>
          <div className="lg:flex lg:gap-5">
          <div className="flex justify-between lg:gap-5 items-center">
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
            <span className="font-bold">{amount}</span>
            <Button isIconOnly color="primary" variant="flat" onClick={() => setAmount(amount + 1)}>+</Button>
          </div>
          <Button 
            fullWidth 
            color="primary"
            onClick={() => {
              handleCart([
                ...cart,
                { 
                  product: "Fall Limited Edition Sneakers",
                  price: 125 * amount,
                  amount: amount,
                  img: "/img/image-product-1-thumbnail.jpg"
                }
              ]);
              
              Swal.fire({
                title: 'Success',
                text: `Successfully added ${amount} item to cart`,
                icon: 'success',
              });
            }}
            >
              Add to cart
          </Button>
          </div>
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
