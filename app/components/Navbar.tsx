"use client"

import {Navbar, NavbarBrand, NavbarContent,NavbarMenu, NavbarItem,NavbarMenuItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu,NavbarMenuToggle, Avatar, Badge,Button} from "@nextui-org/react";
import {CartIcon} from "./CartIcon";
import {Logo} from './Logo'
import {useState} from 'react'

const Nav = () => {
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
              <Badge color="primary" content={0} isInvisible={isInvisible} shape="circle">
                <CartIcon size={30} />
              </Badge>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Cart</p>
            </DropdownItem>
            <DropdownItem key="settings">
              Your cart is empty
            </DropdownItem>
            
          </DropdownMenu>
        </Dropdown>
        
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
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