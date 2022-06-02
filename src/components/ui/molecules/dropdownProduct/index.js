import React, { Component } from 'react'
import { SmallTitle } from '../../styles/titles'
import Attributes from '../attributes'
import styled from 'styled-components';
import FlexContainer from '../../styles/flexContainer';

const ImageContainer = styled.div`
width: 121px;
height: 190px;

`

export default class DropdownProduct extends Component {
  render() {
    return (
    <FlexContainer justify = {'space-between'} margin = {'40px 0'} >
      <div>
        <SmallTitle weight={'300'} margin={'0'}>
          {this.props.product.product.name}
        </SmallTitle>
        {
          this.props.product.product.attributes.map(attribute=>{
            return<Attributes 
              cartDropdown = {true}
              key={attribute.id} 
              attribute = {attribute} 
              selected={this.props.product.selectedAtr} 
              pushSelectedAtr={this.props.pushSelectedAtr}
              index = {this.props.index}
            />
          })
        }
      </div>
      <ImageContainer>
        <img 
          src={this.props.product.product.gallery[0]} 
          alt = {this.props.product.product.name}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </ImageContainer>
    </FlexContainer>
  )}
}
