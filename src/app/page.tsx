'use client'

import { useQuery } from 'react-query'
import { GlobalStyle } from '../app/styles/globalStyles'
import CardItem from './components/cardItem'
import Navbar from './navbar'
import axios from 'axios'

interface products {
  id: number
  name: string
  photo: string
  brand: string
  description: string
  price: number
}

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

  console.log(products)

  return (
    <>
      <Navbar />

      {products.map((product) => (
        <div key={product.id}>
          <CardItem
            name={product.name}
            id={product.id}
            photo={product.photo}
            brand={product.brand}
            description={product.description}
            price={product.price}
          />
        </div>
      ))}

      <GlobalStyle />
    </>
  )
}
