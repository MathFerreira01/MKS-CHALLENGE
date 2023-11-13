import React from 'react'
import { Container } from './style'
import Product from '../product'
import IProducts from '@/app/interface/IProduct'

const ListProducts = ({
  id,
  brand,
  name,
  photo,
  description,
  price,
  quantity,
}: IProducts) => {
  return (
    <Container>
      <Product
        name={name}
        photo={photo}
        description={description}
        price={price}
        id={id}
        brand={brand}
        quantity={quantity}
      />
    </Container>
  )
}

export default ListProducts
