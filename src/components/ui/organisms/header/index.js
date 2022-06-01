import Bag from '../../../../assets/Group.svg'
import FlexContainer from '../../styles/flexContainer';
import Title from '../../styles/titles';
import HeaderContainer from './../../styles/headerContainer/index';
import SelectedNavTitleStyle from './../../styles/selectedNavTitleStyle/index';
import Currency from './currencies/index';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './cart';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      currenciesOpen: false,
      cartOpen: false
    }
  }
  onCurrencyClick=()=>{
    if(this.state.cartOpen){
      this.setState(({
        cartOpen: false
      }))
    }
    this.setState(prev=>({
      currenciesOpen: !prev.currenciesOpen
    }))
  }
  onCartButtonClick=()=>{
    if(this.state.currenciesOpen){
      this.setState(({
        currenciesOpen: false
      }))
    }
    this.setState(prev=>({
      cartOpen: !prev.cartOpen
    }))
  }
  render() {
    return (
      <HeaderContainer>
        <FlexContainer align = {'center'} hight = {'5rem'}>
          {this.props.categories.map((category, index)=>this.props.name === category.name? 
            <NavLink 
              key={index} 
              style={{height: '100%'}} 
              onClick={()=>this.props.onClick(category.name)}
              to={`/category/${category.name}?currency=${this.props.currency}`}
            >
              <Title 
                selected
                onClick={()=>this.props.onClick(category.name)}
              >
                {category.name} 
              </Title> 
              <SelectedNavTitleStyle />
            </NavLink> 
            : 
            <NavLink 
              key={index} 
              style={{height: '100%'}} 
              to={`/category/${category.name}?currency=${this.props.currency}`}
              onClick={()=>this.props.onClick(category.name)}
            >
              <Title 
                navTitle 
              > 
                {category.name} 
              </Title>
            </NavLink>
          )}
        </FlexContainer>
        <FlexContainer 
          align = {'center'} 
          margin={'9px 0 0 0'} 
          justify={'center'} 
        >
          <img src={Bag} alt = 'Bag'/>
        </FlexContainer>
        <FlexContainer align={'center'} justify={'right'}>
          <Currency 
            currenciesOpen = {this.state.currenciesOpen}
            onCurrencyClick ={this.onCurrencyClick}
            currency = {this.props.currency} 
            currencies = {this.props.currencies} 
            onChangeCurrency = {this.props.onChangeCurrency}
          />
          <Cart 
            currency = {this.props.currency}
            cartOpen = {this.state.cartOpen}
            onCartButtonClick = {this.onCartButtonClick}
            cartChanged = {this.props.cartChanged}
            onCartStateChange={this.props.onCartStateChange}
          />
        </FlexContainer>
      </HeaderContainer>
    )
  }
}
