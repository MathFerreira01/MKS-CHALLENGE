'use client'

import { useQuery } from 'react-query'
import { GlobalStyle } from '../app/styles/globalStyles'
import Navbar from './navbar'
import axios from 'axios'
import ListProducts from './components/listProducts'
import styled from 'styled-components'
import Footer from './components/footer'
import products from './interface/IProduct'

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 225px 225px 225px 225px;
  gap: 1em;
  justify-content: center;
`

export default function Home() {
  const { data: products, isLoading } = useQuery<products[]>({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get(
          'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
        )
        .then((res) => res.data.products),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  })

  if (isLoading || !products) return <div>loading...</div>

  return (
    <>
      <Wrapper>
        <Navbar />
        <Container>
          {products.map((product) => (
            <ListProducts
              key={product.id}
              name={product.name}
              id={product.id}
              photo={product.photo}
              brand={product.brand}
              description={product.description}
              price={product.price}
            />
          ))}
        </Container>
        <Footer />
      </Wrapper>
      <GlobalStyle />
    </>
  )
}
