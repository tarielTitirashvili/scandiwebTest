import React, { Component } from 'react';
import Bag from '../../../../assets/Group.svg';
import FlexContainer from '../../styles/flexContainer';
import HeaderContainer from './../../styles/headerContainer/index';
import Currency from './currencies/index';
import Cart from './cart';
import NavCategories from '../../molecules/navCategories';
import styled from 'styled-components';

const NavContainer = styled(FlexContainer)`
align: center;
hight: 5rem;
`;
const LogoContainer = styled(FlexContainer)`
align = {'center'}
margin={'9px 0 0 0'}
justify={'center'}
`;
const DropdownButtonsContainer = styled(FlexContainer)`
align-items: center;
justify-content: right;
`;

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
        <NavContainer>
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
        </NavContainer>
        <LogoContainer>
          <img src={Bag} alt = 'Bag'/>
        </LogoContainer>
        <DropdownButtonsContainer>
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
        </DropdownButtonsContainer>
      </HeaderContainer>
    );
  };
};
