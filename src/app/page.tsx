'use client'

import { useQuery } from 'react-query'
import Navbar from './navbar'
import ListProducts from './components/listProducts'
import Footer from './components/footer'
import IProducts from './interface/IProduct'
import { getAllProductsService } from './services/getAllProducts'
import LoadingProduct from './components/product/loading'
import { Wrapper, Container } from '../app/styles/page.style'

const Home = () => {
  const loadingProducts = [1, 2, 3, 4, 5, 6, 7, 8]

  const { data: products, isLoading } = useQuery<IProducts[]>({
    queryKey: ['products'],
    queryFn: getAllProductsService,
  })

  return (
    <>
      <Wrapper>
        <Navbar />
        <Container>
          {isLoading || !products
            ? loadingProducts.map((index) => <LoadingProduct key={index} />)
            : products.map((product) => (
                <ListProducts
                  key={product.id}
                  name={product.name}
                  id={product.id}
                  photo={product.photo}
                  brand={product.brand}
                  description={product.description}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
        </Container>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Home
