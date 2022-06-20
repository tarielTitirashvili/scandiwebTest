import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddToCartButton from '../../atoms/addToCartButton';
import styled, { css } from 'styled-components';
import { Text } from '../../styles/text';

const Img = styled.img`
  max-width: 354px;
  max-height: 330px;
  cursor: pointer;
  object-fit: contain;
  ${(props) =>
    props.disabled &&
    css`
      background: ${(props) => props.color || props.theme.colors.white};
      opacity: 0.5;
    `}
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  position: relative;
  background-color: ${(props) => props.backgroundColor || props.theme.colors.white};
`;
const StyledNavLink = styled(NavLink)`
  padding: 16px;
  cursor: pointer;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.focus &&
    css`
      box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    `}
`;
const OutOfStockTitle = styled(Text)`
  position: absolute;
  top: 151px;
  left: 70px;
  font-size: 1.5rem;
  color: ${(props) => props.navTitleColor || props.theme.colors.disabled};
`;
const ProductFullTitle = styled(Text)`
  position: relative;
  margin: 24px 0 0 0;
  font-weight: 300;
  font-size: 1.125rem;
`;
const PriceTitle = styled(Text)`
  margin: 0;
  font-weight: 500;
  font-size: 1.125rem;
`;

export default class ProductBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  };
  onFocusStatusChange = () => {
    this.setState((prev) => {
      return {
        focused: !prev.focused,
      };
    });
  };
  render() {
    return (
      <StyledNavLink
        onMouseEnter={this.onFocusStatusChange}
        onMouseLeave={this.onFocusStatusChange}
        to={`/product/${this.props.product.id}?currency=${this.props.currency}`}
        focus={this.state.focused ? 'true' : ''}
        onClick={() => this.props.onClick('')}>
        <Container>
          {this.props.product.inStock ? '' : <OutOfStockTitle>OUT OF STOCK</OutOfStockTitle>}
          <Img
            disabled={this.props.product.inStock ? '' : true}
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
          />
          {this.state.focused && this.props.product.inStock ? (
            <AddToCartButton
              onCartStateChange={this.props.onCartStateChange}
              product={this.props.product}
            />
          ) : (
            ''
          )}
        </Container>
        <ProductFullTitle disabled={this.props.product.inStock ? '' : true}>
          {`${this.props.product.brand} ${this.props.product.name}`}
        </ProductFullTitle>
        {this.props.product.prices.map((currency) => {
          if (this.props.currency === currency.currency.symbol) {
            return (
              <PriceTitle
                key={currency.currency.symbol}
                disabled={this.props.product.inStock ? false : true}>
                {`${currency.currency.symbol}${currency.amount}`}
              </PriceTitle>
            );
          } else {
            return '';
          }
        })}
      </StyledNavLink>
    );
  };
};
