import React, { Component } from "react";
import { GET_PRODUCTS_BY_CATEGORY } from "../../../graphQL/query";
import FlexContainer from "../../ui/styles/flexContainer";
import Title from "../../ui/styles/titles";
import { client } from './../../../index';
import ProductBox from './../../ui/organisms/ProductBox/index';
import styled from 'styled-components';

const ProductsContainer = styled.div`
display: ${props=>props.display || 'grid'};
grid-template-columns:${props=> props.columns || 'minmax(250px, 386px) minmax(250px, 386px) minmax(250px, 386px)'};
grid-template-rows:${props=> props.columns || '444x 444px'};
grid-auto-flow: row;
column-gap: 40px;
@media screen and (max-width: 950px){
  grid-template-columns:${props=> props.columns || 'minmax(250px, 386px) minmax(250px, 386px)'};
  grid-auto-flow: row;
}
@media screen and (max-width: 660px){
  grid-template-columns:${props=> props.columns || 'minmax(250px, 386px)'};
  grid-auto-flow: row;
}
@media screen and (min-width: 1441px){
  grid-template-columns:${props=> props.columns || 'minmax(250px, 386px) minmax(250px, 386px) minmax(250px, 386px) minmax(250px, 386px)'};
  grid-auto-flow: row;
}
`

export default class Category extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      products: [],
    }
  }
  getProductsByCategory = async () => {
    const {data, loading} = await client.query({
        query: GET_PRODUCTS_BY_CATEGORY,
        variables: {
          CategoryInput: {title: this.props.name},
        },
    });
    console.log(data.category.products, loading)
    this.setState(({
      products: data.category.products
    }))
};
  componentDidUpdate(prev){
    if(prev.name!==this.props.name){
      this.getProductsByCategory()
    }
  }
  render(){
    return(
      <>
        <FlexContainer zIndex={'-1'}>
          <Title 
            size = {'42px'} 
            margin={'80px 0 103px 0'}
          >
            {this.props.name}
          </Title>
        </FlexContainer>
        <ProductsContainer>
          {
            this.state.products.map((product)=>{
              return<ProductBox 
                key={product.id} 
                product = {product} 
                currency = {this.props.currency}
              />
            })
          }
        </ProductsContainer>
      </>
    )
  }
}