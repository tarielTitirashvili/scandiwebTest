import React, { Component } from 'react'
import { SmallTitle } from '../../styles/titles'
import styled from 'styled-components';
import Attributes from '../../molecules/attributes';

const ProductInfoContainer = styled.div`
width: 292px;
margin-bottom: 32.4px;
`

export default class ProductInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedAtr: []
    }
  }
  pushSelectedAtr(selected){
    this.setState(prev => ({
      selectedAtr: [...prev.selectedAtr , selected]
    }))
  }
  deleteSelectionAtr(){
    
  }
  render() {
    return (
      <ProductInfoContainer>
          <SmallTitle weight={600} size={'1.875rem'} lineHeight={'27px'} margin={'0'} cursor = {'auto'}>
            {this.props.product.brand}
          </SmallTitle>
          <SmallTitle  size={'1.875rem'} lineHeight={'27px'} margin={'0'} cursor = {'auto'}>
            {this.props.product.name}
          </SmallTitle>
          {
            this.props.product.attributes.map(attribute=>{
              return <Attributes key={attribute.id} attribute = {attribute} selected={this.state.selectedAtr}/>
            })
          }
      </ProductInfoContainer>
    )
  }
}
