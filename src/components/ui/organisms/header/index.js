import React, { Component } from 'react';
import Logo from '../../atoms/logo';
import FlexContainer from '../../styles/flexContainer';
import HeaderContainer from '../../styles/headerContainer';
import NavTitle from './../../styles/navTitles/index';
import SelectedNavTitleStyle from '../../styles/selectedNavTitleStyle'

export default class Header extends Component {

  render() {
    return (
      <HeaderContainer>
        <FlexContainer align = {'center'} hight = {'5rem'}>
          {this.props.categories.map((category, index)=>this.props.name === category.name? 
            <FlexContainer key = {index} display = {'inline'} align = {'center'} hight = {'5rem'}>
              <NavTitle 
                selected
                onClick={()=>this.props.onClick(category.name)}
              > 
                {category.name} 
              </NavTitle> 
              <SelectedNavTitleStyle />
            </FlexContainer>
            : 
            <FlexContainer key = {index} align = {'center'} hight = {'5rem'}>
              <NavTitle 
                navTitle 
                onClick={()=>this.props.onClick(category.name)}
              > 
                {category.name} 
              </NavTitle>
            </FlexContainer>
          )}
        </FlexContainer>
        <FlexContainer align = {'center'} margin={'9px 0 0 0'} justify={'center'} ><Logo /></FlexContainer>
        <h1>cart</h1>
      </HeaderContainer>
    )
  }
}
