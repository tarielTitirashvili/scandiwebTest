import React, { Component } from 'react';
import styled from 'styled-components';
import { client } from '../../..';
import { GET_PRODUCT_BY_ID } from '../../../graphQL/query';
import ImagesPlayer from '../../ui/organisms/imagesPlayer';
import ProductInfo from '../../ui/organisms/productInfo';
import FlexContainer from '../../ui/styles/flexContainer';
import Error404 from '../404error';
import Loading from '../loading';

const ProductInfoContainer = styled(FlexContainer)`
  justify-content: space-between;
  margin: 33.4px 0 0 0;
`;

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true,
    };
  };
  getProductsById = async () => {
    const pathArray = window.location.pathname.split('/');
    const { data, loading } = await client.query({
      query: GET_PRODUCT_BY_ID,
      variables: {
        id: pathArray[2],
      },
    });
    this.setState({
      product: data.product,
      loading: loading,
    });
  };
  componentDidMount() {
    this.getProductsById();
  };
  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.product === null) return <Error404 />;
    return (
      <ProductInfoContainer>
        <ImagesPlayer gallery={this.state.product.gallery} />
        <ProductInfo
          product={this.state.product}
          currency={this.props.currency}
          onCartStateChange={this.props.onCartStateChange}
        />
      </ProductInfoContainer>
    );
  };
};
