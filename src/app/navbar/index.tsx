import React, { useState } from 'react'
import { Container, ContainerCart } from './style'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from '../components/cart'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.products)
  const [modal, setModal] = useState<boolean>(false)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })
    return total
  }

  const togleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <Container>
        <div>
          <h2>MKS</h2>
          <p>Sistemas</p>
        </div>

        <ContainerCart onClick={togleModal}>
          <AiOutlineShoppingCart size={20} />
          <span>{getTotalQuantity() || 0}</span>
        </ContainerCart>
      </Container>

      {modal ? <Cart modal={modal} togleModal={togleModal} /> : null}
    </>
  )
}

export default Navbar
