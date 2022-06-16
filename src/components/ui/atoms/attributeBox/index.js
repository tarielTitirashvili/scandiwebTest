import React, { Component } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { Text } from '../../styles/text';

const AttributeContainer = styled.div`
margin: ${props=>props.margin || '0 8px 0 0'};
padding: ${props=>props.padding || '0px 5px'};
height: ${props=>props.height || '32px'};
min-width: ${props=>props.minWidth || '32px'};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
${props =>props.selectedColorContainer && css`
  border: ${props=>props.borderColor || '1px solid' + props.theme.colors.primary};
  padding: 1px;

`
}
${props =>props.colorContainer && css`
  border: ${props=>props.borderColor || '1px solid' + props.theme.colors.white};
  padding: 1px;
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
${props =>props.cartDropdown && css`
height: 16px;
min-width: 16px;
margin: 0 6px 0 0;
`
}
`;
const NoColorAttributeContainer = styled(AttributeContainer)`
height: 43px;
min-width: 61px;
margin: 0 12px 0 0;
padding: 1px;
${props =>props.dropdown && css`
  height: 22px;
  min-width: 12px;
  padding: 0px 5px;
  margin: 0 8px 0 0;
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
${props =>props.dropdown && css`
  height: 16px;
  width: 16px;
`
}
`;
const SelectedValueTitle = styled(Text)`
color: #FFFFFF;
margin: 0;
font-size: 1rem;
font-family: 'Source Sans Pro', sans-serif;
${props =>props.dropdown && css`
font-size: 0.875rem;
`
}
`
const NotSelectedValueTitle = styled(Text)`
margin: 0;
font-family: 'Source Sans Pro', sans-serif;
${props =>props.dropdown && css`
font-size: 0.875rem;
`
}
`

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
    if(this.props.pushSelectedAtr!==undefined){
      this.props.pushSelectedAtr(
        this.props.name, 
        this.props.item.value, 
      );
    }
  };
  render() {
    return (
      <>
        {
          this.selectedStatus()? 
            this.props.type==="swatch"?
              <AttributeContainer 
                cartDropdown = {this.props.cartDropdown? true : ''}
                selectedColorContainer 
                onClick={this.onClick}
              >
                <ColorsAtr 
                  dropdown={this.props.cartDropdown? true : ''}
                  color={this.props.item.value} 
                />
              </AttributeContainer>
            :
              <NoColorAttributeContainer 
                dropdown = {this.props.cartDropdown? true :''}
                selected
                onClick={this.onClick}
              >
                <SelectedValueTitle 
                  dropdown = {this.props.cartDropdown? true : '' }
                >
                  {this.props.item.value}
                </SelectedValueTitle>
              </NoColorAttributeContainer>
          :
            this.props.type==="swatch"?
              <AttributeContainer 
                cartDropdown = {this.props.cartDropdown? true : ''}
                colorContainer 
                onClick={this.onClick}
              >
                <ColorsAtr 
                  dropdown={this.props.cartDropdown? true : ''}
                  whiteAtr = {this.props.item.value==='#FFFFFF'? true : false}
                  color={this.props.item.value}
                />
              </AttributeContainer>
            :
              <NoColorAttributeContainer 
                dropdown = {this.props.cartDropdown? true :''}
                notSelected 
                onClick={this.onClick}
              >
                <NotSelectedValueTitle 
                  dropdown = {this.props.cartDropdown? true : '' }
                >
                  {this.props.item.value}
                </NotSelectedValueTitle>
              </NoColorAttributeContainer>
        }
      </>
    );
  };
};
