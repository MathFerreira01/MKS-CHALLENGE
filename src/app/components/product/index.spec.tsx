import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider, useDispatch } from 'react-redux'

import configureStore from 'redux-mock-store'
import Product from './index'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}))

const mockStore = configureStore()

describe('Product Component', () => {
  test('renders correctly and interacts with the buy button', () => {
    const mockDispatch = jest.fn()
    ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)

    const store = mockStore({ cart: { products: [] } })

    const productData = {
      id: 1,
      name: 'Product 1',
      photo: 'path/to/photo.jpg',
      description: 'Description of Product 1',
      price: 19.99,
    }

    render(
      <Provider store={store}>
        <Product brand={''} quantity={0} {...productData} />
      </Provider>,
    )

    expect(screen.getByText(productData.name)).toBeInTheDocument()
    expect(screen.getByText(`R$${productData.price}`)).toBeInTheDocument()
    expect(screen.getByText(productData.description)).toBeInTheDocument()

    fireEvent.click(screen.getByText('COMPRAR'))

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'cart/addToCart',
      payload: {
        id: productData.id,
        photo: productData.photo,
        name: productData.name,
        price: productData.price,
      },
    })
  })
})
