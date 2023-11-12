'use client'

import { GlobalStyle } from '../app/styles/globalStyles'
import CardItem from './components/cardItem'
import Navbar from './navbar'

export default function Home() {
  return (
    <>
      <Navbar />

      <CardItem />

      <GlobalStyle />
    </>
  )
}
