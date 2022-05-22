import React, { Component } from 'react'
import EmptyCart from '../../../../assets/EmptyCartWhite.svg'
import styled from 'styled-components';

const StyledCircle = styled.div`
position: absolute;
top: -50px;
left: 280px;
width: 38px;
height: 36.6px; 
background-color: ${props=>props.backgroundColor || props.theme.colors.primary};
border-radius: 100%;
padding-top: 15.4px; 
padding-left: 14px;
`

export default class AddToCartButton extends Component {
  render() {
    return (
      <StyledCircle>
        <img src={EmptyCart} alt={'cart'}/>
      </StyledCircle>
    )
  }
}
