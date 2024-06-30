import React from 'react'
import { HeroContainer, 
  BannerContainer, 
  TitleContainer,
  Title,
  Paragraph,
  BannerImg,
  BannerImgDragon
 } 
  from './HeroStyles'

function Hero() {
  return (
    <>
    <HeroContainer>
      <BannerContainer>
        <BannerImg src='https://imgur.com/evzqUm6.png'/>
        <BannerImgDragon src='https://imgur.com/CADhM1t.png'/>
      </BannerContainer>
      <TitleContainer>
        <Title>¡Alerta Gamer!</Title>
        <Paragraph><strong>Su próxima misión: </strong>equiparse con nuestro merch legendario</Paragraph>
      </TitleContainer>
    </HeroContainer>
    </>
  )
}

export default Hero