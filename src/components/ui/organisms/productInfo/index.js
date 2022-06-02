import React, { Component } from 'react'
import { SmallTitle, Text } from '../../styles/titles'
import Attributes from '../../molecules/attributes';
import ProductPrice from '../../atoms/productPrice';
import CartButton from '../../styles/Button';
import styled from 'styled-components';
import { Interweave } from 'interweave';
import withOnAddToCart from '../../../hoc/withOnAddToCart';

const ProductInfoContainer = styled.div`
width: 320px;
margin-bottom: 32.4px;
margin-left: 100px;
`

class ProductInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedAtr: []
    }
  }
  pushSelectedAtr=(name, value)=>{
    let filteredSelectedAtr = undefined
    if(this.state.selectedAtr.length!==0){
      filteredSelectedAtr = this.state.selectedAtr.filter(selected=>selected.name!==name)
    }
    if(filteredSelectedAtr!==undefined){
      this.setState(({
        selectedAtr: [ ...filteredSelectedAtr , {name: name, value: value}]
      }))
    }else{
      this.setState(({
        selectedAtr: [ {name: name, value: value}]
      }))
    }
  }
  addToCart=()=>{
    this.props.onCartStateChange()
    this.props.onAddToCart(this.state.selectedAtr)
  }
  render() {
    return (
      <ProductInfoContainer>
          <SmallTitle 
            weight={600} 
            size={'1.875rem'} 
            lineHeight={'27px'} 
            margin={'0 0 16px 0'} 
            cursor = {'auto'}
          >
            {this.props.product.brand}
          </SmallTitle>
          <SmallTitle  
            size={'1.875rem'} 
            lineHeight={'27px'} 
            margin={'0 0 43px 0'} 
            cursor = {'auto'}
          >
            {this.props.product.name}
          </SmallTitle>
          {
            this.props.product.attributes.map(attribute=>{
              return <Attributes 
                key={attribute.id} 
                attribute = {attribute} 
                selected={this.state.selectedAtr} 
                pushSelectedAtr={this.pushSelectedAtr}
              />
            })
          }
          <ProductPrice 
            currency = {this.props.currency}
            prices = {this.props.product.prices}
          />
          <CartButton 
            margin = {'0 0 40px 0'}
            onClick={this.addToCart}
          >
            ADD TO CART
          </CartButton>
          <Text>
            <Interweave content={this.props.product.description}/>
          </Text>
      </ProductInfoContainer>
    )
  }
}

export default withOnAddToCart(ProductInfo)