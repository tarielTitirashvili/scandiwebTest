import React, { Component } from 'react'
import FlexContainer from '../../styles/flexContainer'
import { Text } from '../../styles/titles'
import Attributes from './../../molecules/attributes/index';

export default class DropdownCart extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: 0,
      total: 0,
    }
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
      quantity: quantity,
      total: total
    }))
  }
  componentDidMount(){
    this.getQuantityAndTotal()
  }
  componentDidUpdate(prevProps){
    if(this.props.products.length !== prevProps.products.length){
      this.getQuantityAndTotal()
    }
  }
  render() {
    return (
      <div onClick={(e)=>e.stopPropagation()}>
        <FlexContainer margin={'32px 16px'} justify={'left'} >
          <Text weight={'700'}  margin={'0'} >
            My Bag, 
          </Text>
          <Text margin = {'0 0 0 4px'}>
            {this.state.quantity} items
          </Text>
        </FlexContainer>
        <FlexContainer>
          {this.props.products.map(product=>{
            // console.log(product.product.attributes)
            return product.product.attributes.map(attribute=>{
              console.log(attribute)
              return<Attributes 
                key={attribute.id} 
                attribute = {attribute} 
                selected={product.selectedAtr} 
                pushSelectedAtr={this.pushSelectedAtr}
              />
            })
          })}
        </FlexContainer>
        <FlexContainer margin={'32px 16px'} justify={'space-between'}>
          <Text margin={'0'} weight={'500'}>
            Total
          </Text>
          <Text weight={'700'}  margin={'0'} >
           {this.props.currency}{this.state.total}
          </Text>
        </FlexContainer>
      </div>
    )
  }
}
