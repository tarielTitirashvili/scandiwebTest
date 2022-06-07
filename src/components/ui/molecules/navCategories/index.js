import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SelectedNavTitleStyle from '../../styles/selectedNavTitleStyle';
import Title from '../../styles/titles';

export default class NavCategories extends Component {
  render() {
    return (
      <>
        {
          this.props.name === this.props.category.name? 
          <NavLink 
            style={{height: '100%'}} 
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
          </NavLink> 
          : 
          <NavLink 
            style={{height: '100%'}} 
            to={`/category/${this.props.category.name}?currency=${this.props.currency}`}
            onClick={()=>this.props.onClick(this.props.category.name)}
          >
            <Title 
              navTitle 
            > 
              {this.props.category.name} 
            </Title>
          </NavLink>
        }
      </>
    );
  };
};
