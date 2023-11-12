import React from 'react'
import { Container } from './style'
import ButtonCart from '../components/buttonCart'

const Navbar = () => {
  return (
    <Container>
      <div>
        <h2>MKS</h2>
        <p>Sistemas</p>
      </div>

      <ButtonCart />
    </Container>
  )
}

export default Navbar
