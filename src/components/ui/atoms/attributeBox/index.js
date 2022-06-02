import React, { Component } from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import { Text } from '../../styles/titles';

const AttributeContainer = styled.div`
padding: 1px;
margin: ${props=>props.margin || '0 6px 0 0'};
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
`
const ColorsAtr = styled.div`
margin: ${props=>props.margin || '0'};
height: ${props=>props.height || '32px'};
width: ${props=>props.width || '32px'};
background-color: ${props=>props.color || 'white'};
`

export default class AttributeBox extends Component {
  selectedStatus(){
    let isSelected = false
    this.props.selected.forEach(selected =>{
      if(selected.name===this.props.name&&selected.value===this.props.item.value){
        isSelected = true
      }
    })
    return isSelected
  }
  render() {
    return (
      <>
        {
          this.selectedStatus()? 
            this.props.type==="swatch"?
              <AttributeContainer 
                height={`${this.props.cartDropdown?'16px':'32px'}`}
                minWidth = {`${this.props.cartDropdown?'16px':'32px'}`}
                selectedColorContainer 
                onClick={()=>this.props.pushSelectedAtr(
                  this.props.name, 
                  this.props.item.value, 
                  this.props.selected, 
                  this.props.index
                )}
              >
                <ColorsAtr 
                  height = {`${this.props.cartDropdown?'16px':'32px'}`}
                  width = {`${this.props.cartDropdown?'16px':'32px'}`}
                  color={this.props.item.value} 
                />
              </AttributeContainer>
            :
              <AttributeContainer 
                height={`${this.props.cartDropdown?'22px':'45px'}`}
                minWidth = {`${this.props.cartDropdown?'22px':'63px'}`}
                margin={'0 12px 0 0'}
                selected 
                onClick={()=>this.props.pushSelectedAtr(
                  this.props.name, 
                  this.props.item.value, 
                  this.props.selected, 
                  this.props.index
                )}
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
                colorContainer 
                onClick={()=>this.props.pushSelectedAtr(
                  this.props.name, 
                  this.props.item.value, 
                  this.props.selected,
                  this.props.index
                )}
              >
                <ColorsAtr 
                  height = {`${this.props.cartDropdown?'16px':'32px'}`}
                  width = {`${this.props.cartDropdown?'16px':'32px'}`}
                  onClick={()=>this.props.pushSelectedAtr(
                    this.props.name, 
                    this.props.item.value, 
                    this.props.selected,
                    this.props.index
                  )}
                  color={this.props.item.value}
                />
              </AttributeContainer>
            :
              <AttributeContainer 
                margin={'0 12px 0 0'}
                height={`${this.props.cartDropdown?'22px':'45px'}`}
                minWidth = {`${this.props.cartDropdown?'22px':'63px'}`}
                notSelected 
                onClick={()=>this.props.pushSelectedAtr(
                  this.props.name, 
                  this.props.item.value, 
                  this.props.selected,
                  this.props.index
                )}
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
    )
  }
}
