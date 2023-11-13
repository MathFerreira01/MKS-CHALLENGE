'use client'

import { RootState } from '@/app/store'
import IProducts from '@/app/interface/IProduct'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import { IoIosRemove } from 'react-icons/io'

import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '@/app/store/cartSlice'

import {
  Container,
  Image,
  ProductName,
  ProductQuantity,
  Quantity,
  ProductPrice,
  ProductDelete,
} from './style'

const CartItem = ({ id, name, photo, price, quantity }: IProducts) => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.products)

  return (
    <Container>
      <Image src={photo} alt="" />
      <ProductName>{name}</ProductName>
      <ProductQuantity>
        <span>Qtd:</span>
        <Quantity>
          <button
            disabled={cart[0].quantity === 1}
            onClick={() => dispatch(decrementQuantity(id))}
          >
            <IoIosRemove size={13} />
          </button>
          <hr />
          <span>{quantity}</span>
          <hr />
          <button onClick={() => dispatch(incrementQuantity(id))}>
            <GrFormAdd size={13} />
          </button>
        </Quantity>
      </ProductQuantity>
      <ProductPrice>R${price}</ProductPrice>
      <ProductDelete onClick={() => dispatch(removeItem(id))}>
        <AiOutlineClose size={12} />
      </ProductDelete>
    </Container>
  )
}

export default CartItem
