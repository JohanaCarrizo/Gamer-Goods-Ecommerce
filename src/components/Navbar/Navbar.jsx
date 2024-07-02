import React, {useState} from "react";
import {
  NavbarContainer,
  NavbarLinksContainer,
  ImgContainer,
  ImgStyled,
  Menu,
  MenuItems,
  MenuItemLink,
  IconLogoMobile,
} from "./NavbarStyles";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () =>{

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
    <NavbarContainer>
      <NavbarLinksContainer>
        <ImgContainer>
          <a href="#">
            <ImgStyled src="https://imgur.com/lYcIJHA.png" />
          </a>
        </ImgContainer>

        <IconLogoMobile onClick={() => handleClick()}>
          {click ? <FaTimes/> : <FaBars/>}
        </IconLogoMobile>

        <Menu click = {click}>
          <MenuItems onClick={() => handleClick()}>
            <MenuItemLink href="#">Inicio</MenuItemLink>
          </MenuItems>

          <MenuItems onClick={() => handleClick()}>
            <MenuItemLink href="#">Productos</MenuItemLink>
          </MenuItems>

          <MenuItems onClick={() => handleClick()}>
            <MenuItemLink href="#">Contacto</MenuItemLink>
          </MenuItems>

          <MenuItems onClick={() => handleClick()}>
            <MenuItemLink href="#">
              <FaShoppingCart size={"1.5rem"} />
            </MenuItemLink>
          </MenuItems>

          <MenuItems onClick={() => handleClick()}>
            <MenuItemLink href="#">
              <FaRegUserCircle size={"1.5rem"} />
              Iniciar Sesion
            </MenuItemLink>
          </MenuItems>
        </Menu>

      </NavbarLinksContainer>
    </NavbarContainer>
    </>
  );
}

export default Navbar;
