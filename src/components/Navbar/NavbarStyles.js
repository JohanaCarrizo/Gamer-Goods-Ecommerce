import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: white;
  flex-wrap: wrap;
`;

export const NavbarLinksContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* max-width: 1850px; */
  height: 100%;
  /* border: 1px solid red; */
  color: black;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* border: 1px solid red; */
`;

export const ImgStyled = styled.img`
  width: 130px;
  height: 50px;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* border: 1px solid red; */

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 50px;
    right: ${({click}) => click ? 0 : "-110%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #131415;
  }
`;

export const MenuItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  list-style: none;
  color: black;
  padding: 0.5rem 2rem;

  a:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  a:hover {
    text-decoration: underline #d72323 0.3rem;
    transition: 0.1s all ease-in;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    color: white;
  }
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-family: "Oswald";
  font-weight: 500;
`;

export const IconLogoMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: black;
    font-size: 2rem;
    width: auto;
  }
`;
