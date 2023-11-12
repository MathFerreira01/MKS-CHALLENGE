import React from 'react'
import {
  Container,
  ItemImage,
  Wrapper,
  ContainerText,
  ItemName,
  ItemPrice,
  ItemDescription,
  ItemButton,
  ItemLinkButton,
} from './style'

interface product {
  id: number
  name: string
  brand: string
  description: string
  price: number
  photo: string
}

const CardItem = ({ name, photo, description, price }: product) => {
  return (
    <Container>
      <ItemImage src={photo} />
      <Wrapper>
        <ContainerText>
          <ItemName>{name}</ItemName>
          <ItemPrice>R$ {price}</ItemPrice>
        </ContainerText>
        <ItemDescription>{description}</ItemDescription>
      </Wrapper>

      <ItemButton>
        <ItemLinkButton>COMPRAR</ItemLinkButton>
      </ItemButton>
    </Container>
  )
}

export default CardItem
