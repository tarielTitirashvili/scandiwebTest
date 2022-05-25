import React, { Component } from 'react'
import styled from 'styled-components';
import { Text } from '../../styles/titles';

const AttributeContainer = styled.div`
padding: 2px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
border: ${props=>props.borderColor || '1px solid' + props.theme.colors.primary};
`

export default class AttributeBox extends Component {
  render() {
    return (
      <AttributeContainer onClick={()=>this.props.pushSelectedAtr(this.props.name, this.props.item.value)}>
        <Text>
          {this.props.item.value}
        </Text>
      </AttributeContainer>
    )
  }
}
