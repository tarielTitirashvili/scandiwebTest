import React, { Component } from 'react'
import EmptyCart from '../../../../../assets/EmptyCart.svg'

export default class Cart extends Component {
  render() {
    return (
      <>          
        <img src={EmptyCart} alt = 'EmptyCart' />
      </>
    )
  }
}
