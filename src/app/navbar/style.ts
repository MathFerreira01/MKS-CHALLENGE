import styled from 'styled-components'

export const Container = styled.nav`
  background-color: #0f52ba;
  min-height: 101px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4% 0 5%;

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    color: #fff;
    font-size: 40px;
    line-height: 19px;
    font-weight: 00;
  }

  p {
    font-size: 20px;
    font-weight: 200;
    line-height: 19px;

    padding-left: 10px;
    color: #ffffff;
  }
`
