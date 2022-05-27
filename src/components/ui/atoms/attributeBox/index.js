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
height: 32px;
width: 32px;
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
                selectedColorContainer 
                onClick={()=>this.props.pushSelectedAtr(this.props.name, this.props.item.value)}
              >
                <ColorsAtr 
                  color={this.props.item.value} 
                />
              </AttributeContainer>
            :
              <AttributeContainer 
                height={'45px'}
                minWidth = {'63px'}
                margin={'0 12px 0 0'}
                selected 
                onClick={()=>this.props.pushSelectedAtr(this.props.name, this.props.item.value)}
              >
                <Text color={'#FFFFFF'} >
                  {this.props.item.value}
                </Text>
              </AttributeContainer>
          :
            this.props.type==="swatch"?
              <AttributeContainer 
                colorContainer 
                onClick={()=>this.props.pushSelectedAtr(this.props.name, this.props.item.value)}
              >
                <ColorsAtr 
                  onClick={()=>this.props.pushSelectedAtr(this.props.name, this.props.item.value)}
                  color={this.props.item.value}
                />
              </AttributeContainer>
            :
              <AttributeContainer 
                margin={'0 12px 0 0'}
                height={'45px'}
                minWidth = {'63px'}
                notSelected 
                onClick={()=>this.props.pushSelectedAtr(this.props.name, this.props.item.value)}
              >
                <Text >
                  {this.props.item.value}
                </Text>
              </AttributeContainer>
        }
      </>
    )
  }
}
