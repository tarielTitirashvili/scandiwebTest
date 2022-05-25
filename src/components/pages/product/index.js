import React, { Component } from 'react'
import { client } from '../../..';
import { GET_PRODUCT_BY_ID } from '../../../graphQL/query';
import ImagesPlayer from '../../ui/organisms/imagesPlayer';
import ProductInfo from '../../ui/organisms/productInfo';
import FlexContainer from '../../ui/styles/flexContainer';

export default class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: {},
      loading: true
    }
  }
  getProductsById = async () => {
    const pathArray = window.location.pathname.split('/')
    const {data, loading, error} = await client.query({
        query: GET_PRODUCT_BY_ID,
        variables: {
          id: pathArray[2],
        },
    });
    this.setState(({
      product: data.product,
      loading: loading
    }))
    console.log(data.product, loading, error)
  };  
  componentDidMount(){
    this.getProductsById()
  }
  render() {
    if(this.state.loading)return <h1>Loading...</h1>
    return (
      <FlexContainer>
        <ImagesPlayer gallery = {this.state.product.gallery}/>
        <ProductInfo />
      </FlexContainer>
    )
  }
}
