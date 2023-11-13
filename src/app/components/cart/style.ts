import styled from 'styled-components'

export const CartConteiner = styled.div`
  width: 486px;
  height: 100vh;
  background-color: #0f52ba;
  padding: 2em;

  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`
export const CartInfoTop = styled.div`
  display: flex;
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
