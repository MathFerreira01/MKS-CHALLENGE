import React from 'react'
import products from '@/app/interface/IProduct'
import { FiShoppingBag } from 'react-icons/fi'
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

const Product = ({ name, photo, description, price }: products) => {
  return (
    <Container>
      <ItemImage src={photo} />
      <Wrapper>
        <ContainerText>
          <ItemName>{name}</ItemName>
          <ItemPrice>R${price}</ItemPrice>
        </ContainerText>
        <ItemDescription>{description}</ItemDescription>
      </Wrapper>

      <ItemButton>
        <FiShoppingBag size={15} />
        <ItemLinkButton>COMPRAR</ItemLinkButton>
      </ItemButton>
    </Container>
  )
}

export default Product
