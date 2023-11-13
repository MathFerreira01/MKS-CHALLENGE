import styled from 'styled-components'

export const CartConteiner = styled.div`
  width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`
export const CartInfoTop = styled.div`
  display: flex;
  padding: 2em;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 27px;
    font-weight: 700;
    line-height: 33px;
    color: #fff;
  }

  a {
    color: #fff;
    padding: 0.7em;
    border-radius: 200px;
    background-color: #000;
    cursor: pointer;
  }
`
export const ProductContainer = styled.div`
  padding: 2em;
  overflow: auto;
`

export const CartInfoBottom = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;

  p {
    font-weight: 700;
    font-size: 1.7rem;
    color: #ffffff;
  }
`

export const Link = styled.a`
  width: 100%;
  text-align: center;

  padding: 6%;
  background: #000000;
  font-weight: 700;
  font-size: 1.6rem;
  color: #ffffff;
  cursor: pointer;
`
