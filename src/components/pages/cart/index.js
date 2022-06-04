import React, { Component } from 'react'
import withCartFunctionality from '../../hoc/withCartFunctionality'
import CartPage from '../../ui/organisms/cartPage'
import { SmallTitle } from '../../ui/styles/titles'

class Cart extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <SmallTitle cursor={'text'} size={'2rem'} weight={'700'} margin={'80px 0 55px 0'}>
          CART
        </SmallTitle> 
            <CartPage
              onClick = {this.props.onClick}
              onCheckOut = {this.props.onCheckOut}
              cartOpen = {this.props.cartOpen}
              quantity = {this.props.quantity}
              onChangeCount = {this.props.onChangeCount}
              onAtrSelect = {this.props.onAtrSelect}
              currency = {this.props.currency} 
              products = {this.props.products} 
              onCartButtonClick={this.props.onCartButtonClick}
            />
      </div>
    )
  }
}

export default withCartFunctionality(Cart)