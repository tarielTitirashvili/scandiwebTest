import React, { Component } from 'react'
import EmptyCart from '../../../../assets/EmptyCartWhite.svg'
import styled from 'styled-components';
import withOnAddToCart from '../../../hoc/withOnAddToCart';
import { css } from 'styled-components';

const StyledCircle = styled.div`
position: absolute;
top: -50px;
left: ${props=> props.left || '280px' };
width: 38px;
height: 36.6px; 
background-color: ${props=>props.backgroundColor || props.theme.colors.primary};
border-radius: 100%;
padding-top: 15.4px; 
padding-left: 14px;
z-index: 30;
${props =>props.disabled && css`
  background-color: ${props=>props.backgroundColor || props.theme.colors.disabled};
`
}
`

 class AddToCartButton extends Component {
  generateAttributes(){
    let selectedAttributes = []
    this.props.product.attributes.forEach(atr=>{
      selectedAttributes.push({name: atr.name, value: atr.items[0].value})
    })
    return selectedAttributes
  }
  onClick=(e)=>{
      e.stopPropagation()
      e.preventDefault()
      this.props.onCartStateChange()
      this.props.onAddToCart(this.generateAttributes())
  }

  render() {
    return (
      <StyledCircle
        id='AddToCartButton'
        onClick={this.onClick} 
        left={this.props.left}
      >
        <img src={EmptyCart} alt={'cart'}/>
      </StyledCircle>
    )
  }
}

export default withOnAddToCart(AddToCartButton)