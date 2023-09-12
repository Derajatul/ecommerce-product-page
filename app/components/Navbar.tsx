"use client"

import {Navbar, NavbarBrand, NavbarContent,NavbarMenu, NavbarItem,NavbarMenuItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu,NavbarMenuToggle, Avatar, Badge,Button} from "@nextui-org/react";
import Image from 'next/image'
import {CartIcon} from "./CartIcon";
import {Logo} from './Logo'
import {useState} from 'react'
import {useCart} from '../contexts/CartProvider'

interface Product {
  product: string;
  price: number;
  amount: number;
  img: string;
  // tambahkan properti lain sesuai kebutuhan
}


const Nav = () => {
  const {cart}: {cart: Product[]} = useCart()
  const [isInvisible, setIsInvisible] = useState(false);

  
  return(
    <Navbar>
      <NavbarBrand>
        <Logo />
        <NavbarContent className="hidden md:flex gap-4" justify="start" style={{marginLeft: '50px'}}>
        <NavbarItem>
          <Link color="foreground" href="#" underline="hover">
            Collections
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="primary" underline="hover">
            Men
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" underline="hover">
            Women
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" underline="hover">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" underline="hover">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div className="cursor-pointer">
              <Badge 
                color="primary" 
                isInvisible={isInvisible} 
                shape="circle"
                content={
                  cart.map(c => c.amount).reduce((a,b)=>a+b,0)
                }
                >
                <CartIcon size={30} />
              </Badge>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem isReadOnly showDivider>
              <p className="font-semibold">Cart</p>
            </DropdownItem>
            <DropdownItem isReadOnly >
              {cart.length <= 0 ? 
                <p className="text-darkGrayishBlue text-base">Cart is empty</p> :
                <div className="flex gap-5 items-center">
                  <Image src={cart[0].img} width={50} height={50} alt="" className="rounded-md"/>    
                  <div >
                    <p className="text-darkGrayishBlue text-base">{cart[0].product}</p>
                    <p className="text-darkGrayishBlue text-base">${cart[0].price / cart[0].amount} x {cart.map(c => c.amount).reduce((a,b) => a + b,0)} <span className="font-bold">${cart.map(c => c.price).reduce((a,b) => a+b,0)}</span></p>
                  </div>
                  
                </div>
              }
            </DropdownItem>

            {cart.length <= 0 ? null : 
              (
                <DropdownItem>
                  <Button color="primary" fullWidth>
                    Checkout
                  </Button>
                </DropdownItem>
            )}

            
              
              
            
            
          </DropdownMenu>
        </Dropdown>
        
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="warning"
              name="Jason Hughes"
              size="sm"
              src="/img/image-avatar.png"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}
export default Nav