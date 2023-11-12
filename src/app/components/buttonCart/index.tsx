import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ContainerCart } from './style'

const ButtonCart = () => {
  return (
    <ContainerCart>
      <AiOutlineShoppingCart size={20} />
      <span>0</span>
    </ContainerCart>
  )
}

export default ButtonCart
