import React, { useState } from 'react'
import { Container, ContainerCart } from './style'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from '../components/cart'

const Navbar = () => {
  const [modal, setModal] = useState<boolean>(false)

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
          <span>0</span>
        </ContainerCart>
      </Container>

      {modal ? <Cart modal={modal} togleModal={togleModal} /> : null}
    </>
  )
}

export default Navbar
