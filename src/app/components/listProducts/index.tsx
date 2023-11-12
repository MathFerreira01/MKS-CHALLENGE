import React from 'react'
import { Container } from './style'
import Product from '../product'
import products from '@/app/interface/IProduct'

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
