import EmptyCart from '../../../../assets/EmptyCart.svg'
import Bag from '../../../../assets/Group.svg'
import FlexContainer from '../../styles/flexContainer';
import Title from '../../styles/titles';
import HeaderContainer from './../../styles/headerContainer/index';
import SelectedNavTitleStyle from './../../styles/selectedNavTitleStyle/index';
import Currency from './currencies/index';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <FlexContainer align = {'center'} hight = {'5rem'}>
          {this.props.categories.map((category, index)=>this.props.name === category.name? 
            <NavLink 
              key={index} 
              style={{height: '100%'}} 
              onClick={()=>this.props.onClick(category.name)}
              to={`/category/${category.name}`}
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
              to={`/category/${category.name}`} 
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
            currency = {this.props.currency} 
            currencies = {this.props.currencies} 
            onChangeCurrency = {this.props.onChangeCurrency}
          />
          <img src={EmptyCart} alt = 'EmptyCart' />
        </FlexContainer>
      </HeaderContainer>
    )
  }
}
