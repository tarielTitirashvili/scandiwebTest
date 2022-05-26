import React, { Component } from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import { Text } from '../../styles/titles';

const AttributeContainer = styled.div`
padding: 2px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
${props =>props.selected && css`
  border: ${props=>props.borderColor || '1px solid' + props.theme.colors.primary};
`
}
${props =>props.notSelected && css`
  border: ${props=>props.borderColor || '1px solid' + props.theme.colors.text};
`
}
`

export default class AttributeBox extends Component {
  selectedStatus(){
    let isSelected = false
    this.props.selected.map(selected =>{
      if(selected.name===this.props.name&&selected.value===this.props.item.value){
        isSelected = true
      }
    })
    return isSelected
  }
  render() {
    console.log(this.selectedStatus())
    return (
      <>
        {
          this.selectedStatus()? 
            <AttributeContainer 
              selected 
              onClick={()=>this.props.pushSelectedAtr(this.props.name, this.props.item.value)}
            >
              <Text >
                {this.props.item.value}
              </Text>
            </AttributeContainer>
          :
          <AttributeContainer 
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
