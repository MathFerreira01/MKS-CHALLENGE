import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from './index'
import { Provider, useSelector } from 'react-redux'
import store, { RootState } from '../../store'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}))

const mockCarts = [
  {
    id: 1,
    name: 'Product 1',
    photo: 'path/to/photo1.jpg',
    price: 19.99,
    quantity: 2,
    brand: 'Brand 1',
    description: 'Description 1',
  },
]

beforeEach(() => {
  ;(useSelector as jest.Mock).mockImplementation(
    (callback: (state: RootState) => unknown) =>
      // eslint-disable-next-line n/no-callback-literal
      callback({ cart: { products: mockCarts } }),
  )
})

test('renders the h2 and only one cart item correctly', () => {
  const mockToggleModal = jest.fn()

  render(
    <Provider store={store}>
      <Cart modal={true} togleModal={mockToggleModal} />
    </Provider>,
  )

  expect(screen.getByText('Carrinho de Compras')).toBeInTheDocument()
  expect(screen.getAllByText(/Product 1/)).toHaveLength(1)
})
