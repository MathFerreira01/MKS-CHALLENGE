import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './index'

describe('Footer Component', () => {
  test('correctly renders footer text', () => {
    render(<Footer />)

    expect(
      screen.getByText('MKS sistemas © Todos os direitos reservados'),
    ).toBeInTheDocument()
  })
})
