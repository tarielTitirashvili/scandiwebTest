import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import AttributeBox from '../../atoms/attributeBox';
import FlexContainer from '../../styles/flexContainer';
import Title from '../../styles/titles';

const AttributeTile = styled(Title)`
font-family: 'Roboto Condensed', sans-serif;
margin: 0;
cursor: text;
font-weight: 700;
font-size: 1.125rem;
${props =>props.cartDropdown && css`
  font-weight: 400;
  font-size: 0.875rem;
`
}
`;
const AttributesContainer = styled(FlexContainer)`
height: auto;
margin: 8px 0 16px 0;
${props =>props.cartDropdown && css`
margin: 8px 0;
`
}
`;

export default class Attributes extends Component {
  render() {
    return (
      <>
        {
          this.props.cartDropdown?  
            <AttributeTile cartDropdown >
              {this.props.attribute.name.toUpperCase()}:
            </AttributeTile>
          : 
            <AttributeTile >
              {this.props.attribute.name.toUpperCase()}:
            </AttributeTile>
        }
        {
          this.props.cartDropdown?  
            <AttributesContainer cartDropdown>
            {
              this.props.attribute.items.map(item=>{
                return <AttributeBox 
                  key={item.id} 
                  item={item} 
                  name= {this.props.attribute.name} 
                  type= {this.props.attribute.type} 
                  selected={this.props.selected}
                  pushSelectedAtr={this.props.pushSelectedAtr} 
                  cartDropdown = {this.props.cartDropdown}
                  index = {this.props.index}
                />;
              })
            }
            </AttributesContainer>
          :
          <AttributesContainer >
          {
            this.props.attribute.items.map(item=>{
              return <AttributeBox 
                key={item.id} 
                item={item} 
                name= {this.props.attribute.name} 
                type= {this.props.attribute.type} 
                selected={this.props.selected}
                pushSelectedAtr={this.props.pushSelectedAtr} 
                cartDropdown = {this.props.cartDropdown}
                index = {this.props.index}
              />;
            })
          }
          </AttributesContainer>
        }
      </>
    );
  };
};
