import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 225px;
  border-radius: 8px;
  background: #ffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`

export const ItemImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`

export const Wrapper = styled.div`
  padding: 1em;
`

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
`

export const ItemName = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #2c2c2c;
`

export const ItemPrice = styled.p`
  padding: 0.6em;
  background: #373737;
  color: #ffff;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
`

export const ItemDescription = styled.p`
  color: #2c2c2c;
  font-weight: 300;
  font-size: 11px;
  padding-top: 0.4em;
`

export const ItemButton = styled.button`
  border: none;
  background: #0f52ba;
  border-radius: 0 0 8px 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemLinkButton = styled.a`
  background: #0f52ba;
  color: #fff;
  padding: 0.6em;
`
