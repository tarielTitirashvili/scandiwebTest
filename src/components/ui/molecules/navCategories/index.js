import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SelectedNavTitleStyle from '../../styles/selectedNavTitleStyle';
import Title from '../../styles/titles';

const StyledNavLink = styled(NavLink)`
height: 100%;
`

export default class NavCategories extends Component {
  render() {
    return (
      <>
        {
          this.props.name === this.props.category.name? 
          <StyledNavLink 
            onClick={()=>this.props.onClick(this.props.category.name)}
            to={`/category/${this.props.category.name}?currency=${this.props.currency}`}
          >
            <Title 
              selected
              onClick={()=>this.props.onClick(this.props.category.name)}
            >
              {this.props.category.name} 
            </Title> 
            <SelectedNavTitleStyle />
          </StyledNavLink> 
          : 
          <StyledNavLink 
            to={`/category/${this.props.category.name}?currency=${this.props.currency}`}
            onClick={()=>this.props.onClick(this.props.category.name)}
          >
            <Title 
              navTitle 
            > 
              {this.props.category.name} 
            </Title>
          </StyledNavLink>
        }
      </>
    );
  };
};
