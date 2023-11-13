import styled from 'styled-components'

export const Container = styled.nav`
  background-color: #0f52ba;
  min-height: 101px;
  width: 100%;
  margin-bottom: 2em;

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
export const ContainerCart = styled.a`
  display: flex;
  align-items: center;

  padding: 0.8em 1.5em;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;

  span {
    margin-left: 1em;

    font-size: 1.1em;
    font-weight: 700;
    line-height: 22px;
  }
`
