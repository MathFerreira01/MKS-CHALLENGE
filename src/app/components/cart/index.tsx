import React from 'react'
import { CartConteiner, CartInfoTop } from './style'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  modal: boolean
  togleModal: () => void
}

const Cart = ({ modal, togleModal }: Props) => {
  if (!modal) {
    return null
  }

  return (
    <CartConteiner>
      <CartInfoTop>
        <h2>Carrinho de Compras</h2>
        <a onClick={togleModal}>
          <AiOutlineClose />
        </a>
      </CartInfoTop>
    </CartConteiner>
  )
}

export default Cart
