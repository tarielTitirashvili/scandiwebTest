import React, { Component } from 'react';
import { ProductBrandTitle, SmallTitle } from '../../styles/titles';
import Attributes from '../../molecules/attributes';
import ProductPrice from '../../atoms/productPrice';
import CartButton from '../../styles/Button';
import styled from 'styled-components';
import { Interweave } from 'interweave';
import withOnAddToCart from '../../../hoc/withOnAddToCart';
import { Text } from '../../styles/text';

const ProductInfoContainer = styled.div`
width: 308px;
margin-bottom: 32.4px;
margin-left: 100px;
`;
const AddToCartButton = styled(CartButton)`
margin: 0 16px 40px 0;
`;
const ProductDescription = styled(Text)`
font-family: 'Roboto', sans-serif;
`;

class ProductInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedAtr: []
    };
  };
  pushSelectedAtr=(name, value)=>{
    let filteredSelectedAtr = undefined;
    if(this.state.selectedAtr.length!==0){
      filteredSelectedAtr = this.state.selectedAtr.filter(selected=>selected.name!==name);
    };
    if(filteredSelectedAtr!==undefined){
      this.setState((
        {
          selectedAtr: [ ...filteredSelectedAtr , {name: name, value: value}]
        }
      ));
    }else{
      this.setState((
        {
          selectedAtr: [ {name: name, value: value}]
        }
      ));
    };
  };
  addToCart=()=>{
    this.props.onCartStateChange();
    this.props.onAddToCart(this.state.selectedAtr);
  };
  render() {
    return (
      <ProductInfoContainer>
          <ProductBrandTitle 
            productInfoTitle
          >
            {this.props.product.brand}
          </ProductBrandTitle>
          <SmallTitle  
            productInfoTitle
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
              />;
            })
          }
          <ProductPrice 
            currency = {this.props.currency}
            prices = {this.props.product.prices}
          />
          <AddToCartButton 
            disabled={this.props.product.inStock? '' : true}
            onClick={this.addToCart}
          >
            ADD TO CART
          </AddToCartButton>
          <ProductDescription>
            <Interweave content={this.props.product.description}/>
          </ProductDescription>
      </ProductInfoContainer>
    );
  };
};

export default withOnAddToCart(ProductInfo);