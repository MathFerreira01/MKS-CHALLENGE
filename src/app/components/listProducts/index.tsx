import React from 'react'
import { Container } from './style'
import Product from '../product'

interface products {
  id: number
  name: string
  photo: string
  brand: string
  description: string
  price: number
}

const ListProducts = ({
  id,
  brand,
  name,
  photo,
  description,
  price,
}: products) => {
  return (
    <Container>
      <Product
        name={name}
        photo={photo}
        description={description}
        price={price}
        id={id}
        brand={brand}
      />
    </Container>
  )
}

export default ListProducts
