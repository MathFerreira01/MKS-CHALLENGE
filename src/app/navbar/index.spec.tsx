import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './index'
import { Provider } from 'react-redux'
import store from '../store'

test('renders h2 and p correctly', () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>,
  )

  expect(screen.getByText('MKS')).toBeInTheDocument()
  expect(screen.getByText('Sistemas')).toBeInTheDocument()
})
