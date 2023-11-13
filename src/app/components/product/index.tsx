import React from 'react'
import IProducts from '@/app/interface/IProduct'
import { useDispatch } from 'react-redux'
import { FiShoppingBag } from 'react-icons/fi'
import { addToCart } from '@/app/store/cartSlice'
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

const Product = ({ id, name, photo, description, price }: IProducts) => {
  const dispatch = useDispatch()

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

      <ItemButton
        onClick={() => dispatch(addToCart({ id, photo, name, price }))}
      >
        <FiShoppingBag size={15} />
        <ItemLinkButton>COMPRAR</ItemLinkButton>
      </ItemButton>
    </Container>
  )
}

export default Product
