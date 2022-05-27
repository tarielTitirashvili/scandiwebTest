import React, { Component } from 'react'
import AttributeBox from '../../atoms/attributeBox'
import FlexContainer from '../../styles/flexContainer'
import Title from '../../styles/titles'

export default class Attributes extends Component {
  render() {
    return (
      <>
        <Title 
          weight={'700'} 
          size={'1.125rem'} 
          margin={'0'}
        >
          {this.props.attribute.name}:
        </Title>
        <FlexContainer margin={'8px 0 24px 0'} height={'auto'}>
          {
            this.props.attribute.items.map(item=>{
              return <AttributeBox 
                key={item.id} 
                item={item} 
                name= {this.props.attribute.name} 
                type= {this.props.attribute.type} 
                selected={this.props.selected}
                pushSelectedAtr={this.props.pushSelectedAtr} 
              />
            })
          }
        </FlexContainer>
      </>
    )
  }
}
