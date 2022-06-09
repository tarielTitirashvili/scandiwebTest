import React, { Component } from "react";
import { GET_PRODUCTS_BY_CATEGORY } from "../../../graphQL/query";
import FlexContainer from "../../ui/styles/flexContainer";
import Title from "../../ui/styles/titles";
import { client } from './../../../index';
import ProductBox from './../../ui/organisms/ProductBox/index';
import styled from 'styled-components';
import Loading from "../loading";
import Error404 from "../404error";

export const ProductsContainer = styled.div`
display: ${props=>props.display || 'grid'};
grid-template-columns:${props=> props.columns || 'minmax(324.5px, 386px) minmax(324.5px, 386px) minmax(324.5px, 386px)'};
grid-template-rows:${props=> props.rows || '444px 444px'};
grid-auto-flow: row;
column-gap: 40px;
@media screen and (max-width: 1171px){
  grid-template-columns:${props=> props.columns || 'minmax(324.5px, 386px) minmax(324.5px, 386px)'};
  grid-auto-flow: row;
}
@media screen and (max-width: 807px){
  grid-template-columns:${props=> props.columns || 'minmax(304.5px, 386px)'};
  grid-auto-flow: row;
}
@media screen and (min-width: 1441px){
  grid-template-columns:${props=> props.columns || 'minmax(324.5px, 386px) minmax(324.5px, 386px) minmax(324.5px, 386px) minmax(324.5px, 386px)'};
  grid-auto-flow: row;
}
`;

class Category extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      products: [],
    };
  };

  getProductsByCategory = async () => {
    this.setState((
      {
      loading: true,
      }
    ));
    const {data, loading} = await client.query({
        query: GET_PRODUCTS_BY_CATEGORY,
        variables: {
          CategoryInput: {title: this.props.name},
        },
    });
    if(data.category===null){
      this.setState((
        {
          products: data.category,
          loading: false
        }
        ))
    }else{
      this.setState((
        {
          products: data.category.products,
          loading: loading,
        }
      ));
    }
};
  componentDidUpdate(prev){
    if(prev.name!==this.props.name){
      this.getProductsByCategory();
    };
  };
  componentDidMount(){
    this.getProductsByCategory();
  };
  render(){
    if(this.state.loading)return<Loading />;
    if(this.state.products===null)return<Error404 />
    return(
      <>
        <FlexContainer zIndex={'-1'}>
          <Title 
            lineHeight={'67.2px'}
            size = {'42px'} 
            margin={'80px 0 103px 0'}
            weight={'400'}
          >
            {this.props.name}
          </Title>
        </FlexContainer>
        <ProductsContainer>
          {
            this.state.products.map((product)=>{
                return<ProductBox 
                onCartStateChange = {this.props.onCartStateChange}
                onClick = { this.props.onClick }
                key={product.id} 
                product = {product} 
                currency = {this.props.currency}
              />
            })
          }
        </ProductsContainer>
      </>
    );
  };
};

export default Category;