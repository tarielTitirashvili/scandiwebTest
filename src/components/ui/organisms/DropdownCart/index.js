import React, { Component } from 'react'
import DropdownCartButtons from '../../molecules/dropdownCartButtons';
import DropdownProduct from '../../molecules/dropdownProduct';
import FlexContainer from '../../styles/flexContainer'
import { Text } from '../../styles/titles'

class DropdownCart extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0,
    }
  }
  pushSelectedAtr=(name, value, selected, index)=>{
    this.props.onAtrSelect(name, value, selected, index)
  }
  getQuantityAndTotal=()=>{
    let quantity = 0
    let total = 0
    this.props.products.forEach(product=>{
      quantity = quantity + product.quantity
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
      this.getQuantityAndTotal()
    }
  }
  render() {
    return (
      <div onClick={(e)=>e.stopPropagation()}>
        <FlexContainer margin={'0 0 32px 0'} justify={'left'} >
          <Text cursor={'text'} weight={'700'}  margin={'0'} >
            My Bag, 
          </Text>
          <Text cursor={'text'} margin = {'0 0 0 4px'}>
            {this.props.quantity} items
          </Text>
        </FlexContainer>
        <FlexContainer display = {'inline'} >
          {this.props.products.map((product, index)=>{
            return<DropdownProduct 
              onChangeCount = {this.props.onChangeCount}
              key={`${product.product.id}${index}`}
              product = {product} 
              index = {index}
              pushSelectedAtr={this.pushSelectedAtr}
              currency = {this.props.currency}
            />
          })}
        </FlexContainer>
        <FlexContainer margin={'32px 16px'} justify={'space-between'}>
          <Text cursor={'text'} margin={'0'} weight={'500'}>
            Total
          </Text>
          <Text cursor={'text'} weight={'700'}  margin={'0'} >
           {this.props.currency}{this.state.total}
          </Text>
        </FlexContainer>
        <DropdownCartButtons 
          total ={this.state.total} 
          onCartButtonClick = {this.props.onCartButtonClick} 
        />
      </div>
    )
  }
}

export default DropdownCart