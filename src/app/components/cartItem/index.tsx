'use client'

import { RootState } from '@/app/store'
import IProducts from '@/app/interface/IProduct'
import { useDispatch, useSelector } from 'react-redux'

import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '@/app/store/cartSlice'

import {
  Container,
  CardCarrinhoImage,
  CardCarrinhoTexto,
  CardCarrinhoQtd,
  WrapperQtd,
  CardCarrinhoPrice,
  CardCarrinhoDelete,
} from './style'

const CartItem = ({ id, name, photo, price, quantity }: IProducts) => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.products)

  return (
    <Container>
      <CardCarrinhoImage src={photo} />
      <CardCarrinhoTexto>{name}</CardCarrinhoTexto>
      <CardCarrinhoQtd>
        <span>Qtd:</span>
        <WrapperQtd>
          <button
            disabled={cart[0].quantity === 1}
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </button>
          <hr />
          <span>{quantity}</span>
          <hr />
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </WrapperQtd>
      </CardCarrinhoQtd>
      <CardCarrinhoPrice>{price}</CardCarrinhoPrice>
      <CardCarrinhoDelete onClick={() => dispatch(removeItem(id))}>
        X
      </CardCarrinhoDelete>
    </Container>
  )
}

export default CartItem
