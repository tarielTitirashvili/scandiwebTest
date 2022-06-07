import React, { Component } from 'react';
import Bag from '../../../../assets/Group.svg';
import FlexContainer from '../../styles/flexContainer';
import HeaderContainer from './../../styles/headerContainer/index';
import Currency from './currencies/index';
import Cart from './cart';
import NavCategories from '../../molecules/navCategories';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      currenciesOpen: false,
      cartOpen: false
    };
  };
  onCurrencyClick=()=>{
    if(this.state.cartOpen){
      this.setState((
        {
          cartOpen: false
        }
      ));
    };
    this.setState(prev=>(
      {
        currenciesOpen: !prev.currenciesOpen
      }
    ));
  };
  onCartButtonClick=()=>{
    if(this.state.currenciesOpen){
      this.setState((
        {
          currenciesOpen: false
        }
      ));
    };
    this.setState(prev=>(
      {
        cartOpen: !prev.cartOpen
      }
    ));
  };
  render() {
    return (
      <HeaderContainer>
        <FlexContainer align = {'center'} hight = {'5rem'}>
          {this.props.categories.map((category, index)=>
            <NavCategories 
              currency={this.props.currency}
              name={this.props.name} 
              key={index} 
              category={category} 
              index={index} 
              onClick={this.props.onClick} 
            />
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
            onClick = {this.props.onClick}
            currency = {this.props.currency}
            cartOpen = {this.state.cartOpen}
            onCartButtonClick = {this.onCartButtonClick}
            cartChanged = {this.props.cartChanged}
            onCartStateChange={this.props.onCartStateChange}
          />
        </FlexContainer>
      </HeaderContainer>
    );
  };
};
