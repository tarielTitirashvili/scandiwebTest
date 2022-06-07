import React, { Component } from 'react'
import FlexContainer from '../../styles/flexContainer'
import { Text } from '../../styles/titles'
import { NavLink } from 'react-router-dom';
import AddToCartButton from '../../atoms/addToCartButton';
import styled,{ css } from 'styled-components';

const Img = styled.img`
width: 100%; 
height: 100%; 
object-fit: cover; 
cursor: pointer;
${props =>props.disabled && css`
  background: ${props=>props.color || props.theme.colors.white};
  opacity: 0.5;
`
}
`

export default class ProductBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      focused: false,
    }
    this.cartPosRef = React.createRef()
  }
  onFocusStatusChange=()=>{
    this.setState(prev=>{
      return{
      focused: !prev.focused
    }})
  }
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
        }}
        onClick={()=>this.props.onClick('')}
      >
        <FlexContainer 
          position={'relative'}
          display={'block'} 
          justify={'left'} 
          height={'330px'}
          zIndex={'0'}
        >
          <Text 
            display={this.props.product.inStock? 'none' : 'block'}
            disabled
            position={'absolute'}
            top={'151px'}
            left={'70px'}
            size = {'1.5rem'}
          >
            OUT OF STOCK
          </Text>
          <Img 
            disabled={this.props.product.inStock? false : true}
            src={this.props.product.gallery[0]} 
            alt={this.props.product.name}
          />
        </FlexContainer>
        <Text 
          disabled={this.props.product.inStock? false : true}
          position={'relative'}
          weight={'300'} 
          fontSize={'1.125rem'} 
          margin={'24px 0 0 0'}
        >
          { this.state.focused&&this.props.product.inStock? 
          <AddToCartButton 
          onCartStateChange = {this.props.onCartStateChange}
          product = {this.props.product}
          left={`${this.cartPosRef.current.offsetWidth-98}px`} />:''}
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
            </Text>
            }else {return ''}
          })
        }
      </NavLink>
    )
  }
}
