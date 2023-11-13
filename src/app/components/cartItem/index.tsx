import React from 'react'
import {
  Container,
  CardCarrinhoImage,
  CardCarrinhoTexto,
  CardCarrinhoQtd,
  WrapperQtd,
  CardCarrinhoPrice,
  CardCarrinhoDelete,
} from './style'

const CartItem = () => {
  return (
    <Container>
      <CardCarrinhoImage src="" alt="" />
      <CardCarrinhoTexto>name</CardCarrinhoTexto>
      <CardCarrinhoQtd>
        <span>Qtd:</span>
        <WrapperQtd>
          <button
          // disabled={cart[0].quantity === 1}
          // onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </button>
          <hr />
          <span>0</span>
          <hr />
          <button>+</button>
        </WrapperQtd>
      </CardCarrinhoQtd>
      <CardCarrinhoPrice>100</CardCarrinhoPrice>
      <CardCarrinhoDelete>X</CardCarrinhoDelete>
    </Container>
  )
}

export default CartItem
