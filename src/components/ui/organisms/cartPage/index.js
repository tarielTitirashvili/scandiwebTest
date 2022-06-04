import React, { Component } from 'react'
import { Text } from '../../styles/titles'
import FlexContainer from '../../styles/flexContainer/index'
import CartProduct from '../../molecules/cartProduct'
import CartButton from '../../styles/Button'

class CartPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0,
    }
  }
  checkOut=()=>{
    this.props.onCheckOut()
    console.log(this.state.total)
  }
  pushSelectedAtr=(name, value, selected, index)=>{
    this.props.onAtrSelect(name, value, selected, index)
  }
  getTotal=()=>{
    let total = 0
    this.props.products.forEach(product=>{
      product.product.prices.forEach(currency=>{
        if(currency.currency.symbol===this.props.currency){
          total = total + product.quantity*currency.amount
        }
      })
    })
    this.setState(({
      total: total
    }))
  }
  componentDidUpdate(prevProps){
    if(
      (this.props.quantity !== prevProps.quantity) || 
      (this.props.products.length!==prevProps.products.length)
    ){
      this.getTotal()
    }
  }
  render() {
    return (
      <div onClick={(e)=>e.stopPropagation()}>
        <FlexContainer display = {'inline'} >
          {this.props.products.map((product, index)=>{
            return<CartProduct
              onChangeCount = {this.props.onChangeCount}
              key={`${product.product.id}${index}`}
              product = {product} 
              index = {index}
              pushSelectedAtr={this.pushSelectedAtr}
              currency = {this.props.currency}
            />
          })}
        </FlexContainer>
        <FlexContainer margin={'32px 0 8px 0'} justify={'left'} >
          <Text cursor={'text'}  margin={'0'} >
          Tax 21%: 
          </Text>
          <Text cursor={'text'} weight={'700'} margin = {'0 0 0 4px'}>
            {this.props.currency}{this.state.total*0.21}
          </Text>
        </FlexContainer>
        <FlexContainer margin={'0 0 8px 0'} justify={'left'} >
          <Text cursor={'text'}  margin={'0'} >
            Quantity:  
          </Text>
          <Text cursor={'text'} weight={'700'} margin = {'0 0 0 4px'}>
            {this.props.quantity}
          </Text>
        </FlexContainer>
        <FlexContainer margin={'0 0 16px 0'} justify={'left'}>
          <Text cursor={'text'} margin={'0'} weight={'500'}>
            Total:
          </Text>
          <Text cursor={'text'} weight={'700'}  margin = {'0 0 0 4px'}>
           {this.props.currency}{this.state.total}
          </Text>
        </FlexContainer>
        <FlexContainer>
          <div style={{width: '279px', height: '43px'}}>
            <CartButton onClick={this.checkOut} size={'0.875rem'} padding={'13.1px'}>
              ORDER
            </CartButton>
          </div>
        </FlexContainer>
      </div>
    )
  }
}

export default CartPage