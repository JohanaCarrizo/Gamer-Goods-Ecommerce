import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 600px; */

  @media screen and (max-width: 960px) {
    height: 33%;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(#a61b1b, #711212);
  width: 100%;
  max-height: 500px;
  height: 60%;
  position: relative;

  @media screen and (max-width: 960px) {
    height: 33%;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  height: auto;
`;

export const BannerImgDragon = styled.img`
  width: 800px;
  max-width: 800px;
  height: auto;
  position: absolute;
  bottom: -330px;

  @media screen and (max-width: 1400px) {
    width: 700px;
    position: absolute;
    bottom: -290px;
  }

  @media screen and (max-width: 1200px) {
    width: 500px;
    position: absolute;
    bottom: -205px;
  }

  
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 40%;
  background-color: white;
  box-shadow: 1px 8px 16px -7px rgba(0, 0, 0, 0.65) inset;
  -webkit-box-shadow: 1px 8px 16px -7px rgba(0, 0, 0, 0.65) inset;
  -moz-box-shadow: 1px 8px 16px -7px rgba(0, 0, 0, 0.65) inset;

  @media screen and (max-width: 960px) {
    height: 200px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #d72323;
  font-size: 53px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: black;
  font-family: "Poppins", sans-serif;
`;
