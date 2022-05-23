import React, { Component } from 'react'
import FlexContainer from '../../styles/flexContainer'
import { Text } from '../../styles/titles'
import { NavLink } from 'react-router-dom';
import AddToCartButton from '../../atoms/addToCartButton';

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
    console.log(this.cartPosRef.current.offsetWidth-200)
  }
  render() {
    return (
      <NavLink 
        ref={this.cartPosRef}
        onMouseEnter={this.onFocusStatusChange}
        onMouseLeave={this.onFocusStatusChange}
        to={`/product/${this.props.product.id}`} 
        style={{
          padding:'16px', 
          cursor: 'pointer',
          boxShadow: this.state.focused?'0px 4px 35px rgba(168, 172, 176, 0.19)':'none',
        }}
      >
        <FlexContainer 
          display={'block'} 
          justify={'left'} 
          height={'330px'}
        >
          <img 
            src={this.props.product.gallery[0]} 
            alt={this.props.product.name}
            style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer'}}
          />
        </FlexContainer>
        <Text 
          position={'relative'}
          weight={'300'} 
          fontSize={'1.125rem'} 
          margin={'24px 0 0 0'}
        >
          { this.state.focused? <AddToCartButton left={`${this.cartPosRef.current.offsetWidth-98}px`} />:''}
          {this.props.product.name}
        </Text>
        {
          this.props.product.prices.map((currency)=>{
            if(this.props.currency.label===currency.currency.label&&
              this.props.currency.symbol===currency.currency.symbol
              ){
            return<Text 
              key={currency.currency.symbol} 
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
