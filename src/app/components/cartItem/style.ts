import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
  margin: 1em auto 1em;
  position: relative;

  height: 95px;
  max-width: 100%;

  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`

export const Image = styled.img`
  height: 8vh;
  padding: 0.2em;
`
export const ProductName = styled.p`
  width: 80px;
  color: #2c2c2c;
  font-weight: 400;
  font-size: 0.8em;
`

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > span {
    font-weight: 400;
    font-size: 0.6em;
  }
`

export const Quantity = styled.div`
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.3px solid #bfbfbf;

  > button {
    margin: 0 0.4em 0;
    font-size: 1em;
    font-weight: 400;
    border: none;
    background: #ffff;

    cursor: pointer;
  }

  > span {
    padding: 0.5em;
    font-weight: 400;
  }

  > hr {
    border: 0.2px solid #bfbfbf;
    height: 25px;
  }
`

export const ProductPrice = styled.p`
  font-weight: 700;
`

export const ProductDelete = styled.a`
  top: -10px;
  right: -10px;

  border-radius: 50%;
  position: absolute;
  padding: 0.4em;
  background-color: #000;

  cursor: pointer;
  color: #ffff;
  font-size: 15px;
`
