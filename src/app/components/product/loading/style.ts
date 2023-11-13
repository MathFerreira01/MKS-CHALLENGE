import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 225px;
  height: 285px;
  border-radius: 8px;
  background: #ffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`

export const ItemImage = styled.div`
  padding-top: 0.8em;
`

export const Wrapper = styled.div``

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemName = styled.span``

export const ItemPrice = styled.p`
  padding: 0.4em;
  width: 100px;
`

export const ItemDescription = styled.p``

export const ItemButton = styled.button`
  border: none;
  color: #fff;
  width: 100%;
  border-radius: 0 0 8px 8px;
  cursor: progress;
`
