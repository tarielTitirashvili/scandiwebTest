import React, { Component } from 'react'
import { SmallTitle } from '../../styles/titles'
import styled from 'styled-components';
import Attributes from '../../molecules/attributes';

const ProductInfoContainer = styled.div`
width: 320px;
margin-bottom: 32.4px;
`

export default class ProductInfo extends Component {
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
      </ProductInfoContainer>
    )
  }
}
