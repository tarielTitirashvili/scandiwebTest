import React, { Component } from "react";
import { GET_PRODUCTS_BY_CATEGORY } from "../../../graphQL/query";
import FlexContainer from "../../ui/styles/flexContainer";
import Title from "../../ui/styles/titles";
import { client } from './../../../index';
import ProductBox from './../../ui/organisms/ProductBox/index';

export const SelectedCategoryProvider = React.createContext()

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
      <FlexContainer>
        <Title size = {'42px'} margin={'80px 0 87px 0'}>
          {this.props.name}
        </Title>
      </FlexContainer>
      {
        this.state.products.map((product)=>{
          return<ProductBox key={product.id} product = {product} />
        })
      }
      </>
    )
  }
}