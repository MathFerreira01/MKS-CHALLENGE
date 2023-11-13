'use client'

import React from 'react'
import { CartConteiner, CartInfoTop } from './style'
import { AiOutlineClose } from 'react-icons/ai'
import CartItem from '../cartItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'

interface Props {
  modal: boolean
  togleModal: () => void
}

const Cart = ({ modal, togleModal }: Props) => {
  const carts = useSelector((state: RootState) => state.cart.products)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    carts.forEach((item) => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

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
      <div>
        {carts.map((cart, index) => (
          <CartItem
            key={index}
            id={cart.id}
            name={cart.name}
            photo={cart.photo}
            price={cart.price}
            quantity={cart.quantity}
            brand={cart.brand}
            description={cart.description}
          />
        ))}
      </div>
    </CartConteiner>
  )
}

export default Cart
