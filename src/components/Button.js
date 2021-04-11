import styled from 'styled-components'

const Button = styled.button`
  border: 2px solid #fc9b4c;
  border-radius: 5px;
  background-color: transparent;
  color: #fc9b4c;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 10px 15px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;

  &:hover {
    background-color: #fc9b4c;
    color: black;
  }
`

export default Button
