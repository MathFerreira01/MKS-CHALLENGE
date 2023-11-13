import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  Container,
  ItemImage,
  Wrapper,
  ContainerText,
  ItemName,
  ItemPrice,
  ItemDescription,
  ItemButton,
} from './style'

const LoadingProduct = () => {
  return (
    <Container>
      <ItemImage>
        <Skeleton height={130} width={150} />
      </ItemImage>
      <Wrapper>
        <ContainerText>
          <ItemName>
            <Skeleton height={30} width={100} />
          </ItemName>
          <ItemPrice>
            <Skeleton height={30} width={93} />
          </ItemPrice>
        </ContainerText>
        <ItemDescription>
          <Skeleton height={30} width={200} />
        </ItemDescription>
      </Wrapper>

      <ItemButton>
        <Skeleton height={28} />
      </ItemButton>
    </Container>
  )
}

export default LoadingProduct
