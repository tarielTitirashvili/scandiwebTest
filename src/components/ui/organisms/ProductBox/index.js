import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddToCartButton from '../../atoms/addToCartButton';
import styled,{ css } from 'styled-components';
import { Text } from '../../styles/text';

const Img = styled.img`
width: 100%; 
cursor: pointer;
object-fit: contain;
${props =>props.disabled && css`
  background: ${props=>props.color || props.theme.colors.white};
  opacity: 0.5;
`
}
`;

const Container = styled.div`
display: flex;
justify-content: left;
flex-grow: 1;
position: relative;
background-color:${props=>props.backgroundColor || props.theme.colors.white}
`

export default class ProductBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      focused: false,
    };
    this.cartPosRef = React.createRef();
  };
  onFocusStatusChange=()=>{
    this.setState(prev=>{
      return{
      focused: !prev.focused
    }});
  };
  render() {
    return (
      <NavLink 
        ref={this.cartPosRef}
        onMouseEnter={this.onFocusStatusChange}
        onMouseLeave={this.onFocusStatusChange}
        to={`/product/${this.props.product.id}?currency=${this.props.currency}`} 
        style={{
          padding:'16px', 
          cursor: 'pointer',
          boxShadow: this.state.focused?'0px 4px 35px rgba(168, 172, 176, 0.19)':'none',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={()=>this.props.onClick('')}
      >
        <Container 
        >
          {
            this.props.product.inStock?
            ''
            :
            <Text 
            disabled
            position={'absolute'}
            top={'151px'}
            left={'70px'}
            size = {'1.5rem'}
          >
            OUT OF STOCK
          </Text>
          }
          <Img 
            disabled={this.props.product.inStock? false : true}
            src={this.props.product.gallery[0]} 
            alt={this.props.product.name}
          />
          { 
            this.state.focused&&this.props.product.inStock? 
            <AddToCartButton 
                onCartStateChange = {this.props.onCartStateChange}
                product = {this.props.product}
              />
            :
              ''
          }
        </Container>
        <Text 
          disabled={this.props.product.inStock? false : true}
          position={'relative'}
          weight={'300'} 
          fontSize={'1.125rem'} 
          margin={'24px 0 0 0'}
        >

          {`${this.props.product.brand} ${this.props.product.name}`}
        </Text>
        {
          this.props.product.prices.map((currency)=>{
            if(this.props.currency===currency.currency.symbol){
            return<Text 
              key={currency.currency.symbol} 
              disabled={this.props.product.inStock? false : true}
              weight={'500'} 
              fontSize={'1.125rem'} 
              margin={'0'}
            >
            {`${currency.currency.symbol}${currency.amount}`}
            </Text>;
            }else {return ''};
          })
        }
      </NavLink>
    );
  };
};