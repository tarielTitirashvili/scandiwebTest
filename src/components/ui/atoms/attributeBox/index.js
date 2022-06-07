import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { Text } from '../../styles/titles';

const AttributeContainer = styled.div`
margin: ${props=>props.margin || '0 6px 0 0'};
padding: ${props=>props.padding || '0px 5px'};
height: ${props=>props.height || '32px'};
min-width: ${props=>props.minWidth || '32px'};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
${props =>props.selectedColorContainer && css`
  border: ${props=>props.borderColor || '1px solid' + props.theme.colors.primary};
`
}
${props =>props.colorContainer && css`
  border: ${props=>props.borderColor || '1px solid' + props.theme.colors.white};
`
}
${props =>props.selected && css`
  border: ${props=>props.borderColor || '1px solid' + props.theme.colors.text};
  background-color: ${props=> props.background || props.theme.colors.text};
`
}
${props =>props.notSelected && css`
  border: ${props=>props.borderColor || '1px solid' + props.theme.colors.text};
`
}
`;
const ColorsAtr = styled.div`
margin: ${props=>props.margin || '0'};
height: ${props=>props.height || '32px'};
width: ${props=>props.width || '32px'};
background-color: ${props=>props.color || 'white'};
${props =>props.whiteAtr && css`
  border: ${props=>props.borderColor || `1px solid ${props.theme.colors.text}`};
`
}
`;

export default class AttributeBox extends Component {
  selectedStatus(){
    let isSelected = false;
    this.props.selected.forEach(selected =>{
      if(selected.name===this.props.name&&selected.value===this.props.item.value){
        isSelected = true;
      };
    });
    return isSelected;
  };
  onClick=()=>{
    this.props.pushSelectedAtr(
      this.props.name, 
      this.props.item.value, 
      this.props.selected,
      this.props.index
    );
    if(this.props.setNewAttributeSelected!==undefined){
      this.props.setNewAttributeSelected();
    };
  };
  render() {
    return (
      <>
        {
          this.selectedStatus()? 
            this.props.type==="swatch"?
              <AttributeContainer 
                height={`${this.props.cartDropdown?'16px':'32px'}`}
                minWidth = {`${this.props.cartDropdown?'16px':'32px'}`}
                margin={`${this.props.cartDropdown?'':'0 8px 0 0'}`}
                padding={'1px'}
                selectedColorContainer 
                onClick={this.onClick}
              >
                <ColorsAtr 
                  height = {`${this.props.cartDropdown?'16px':'32px'}`}
                  width = {`${this.props.cartDropdown?'16px':'32px'}`}
                  whiteAtr = {this.props.item.value==='$FFFFFF'? true : false}
                  color={this.props.item.value} 
                />
              </AttributeContainer>
            :
              <AttributeContainer 
                height={`${this.props.cartDropdown?'22px':'43px'}`}
                minWidth = {`${this.props.cartDropdown?'12px':'61px'}`}
                margin={`${this.props.cartDropdown?'':'0 12px 0 0'}`}
                padding={`${this.props.cartDropdown?'0px 5px':'1px'}`}
                selected 
                onClick={this.onClick}
              >
                <Text 
                  size={`${this.props.cartDropdown?'0.875rem':'1rem'}`}
                  color={'#FFFFFF'} 
                  margin = {'0'} 
                >
                  {this.props.item.value}
                </Text>
              </AttributeContainer>
          :
            this.props.type==="swatch"?
              <AttributeContainer 
                height={`${this.props.cartDropdown?'16px':'32px'}`}
                minWidth = {`${this.props.cartDropdown?'16px':'32px'}`}
                margin={`${this.props.cartDropdown?'':'0 8px 0 0'}`}
                padding={'1px'}
                colorContainer 
                onClick={this.onClick}
              >
                <ColorsAtr 
                  height = {`${this.props.cartDropdown?'16px':'32px'}`}
                  width = {`${this.props.cartDropdown?'16px':'32px'}`}
                  whiteAtr = {this.props.item.value==='#FFFFFF'? true : false}
                  color={this.props.item.value}
                />
              </AttributeContainer>
            :
              <AttributeContainer 
                margin={`${this.props.cartDropdown?'':'0 12px 0 0'}`}
                height={`${this.props.cartDropdown?'22px':'43px'}`}
                minWidth = {`${this.props.cartDropdown?'12px':'61px'}`}
                padding={`${this.props.cartDropdown?'0px 5px':'1px'}`}
                notSelected 
                onClick={this.onClick}
              >
                <Text 
                  size={`${this.props.cartDropdown?'0.875rem':'1rem'}`}
                  margin={'0'} 
                >
                  {this.props.item.value}
                </Text>
              </AttributeContainer>
        }
      </>
    );
  };
};
