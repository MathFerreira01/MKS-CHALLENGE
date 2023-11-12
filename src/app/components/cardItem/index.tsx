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

const CardItem = () => {
  return (
    <Container>
      <ItemImage src="" />
      <Wrapper>
        <ContainerText>
          <ItemName>Name</ItemName>
          <ItemPrice>R$preço</ItemPrice>
        </ContainerText>
        <ItemDescription>description</ItemDescription>
      </Wrapper>

      <ItemButton>
        <ItemLinkButton>COMPRAR</ItemLinkButton>
      </ItemButton>
    </Container>
  )
}

export default CardItem
