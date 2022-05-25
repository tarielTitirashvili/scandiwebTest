import React, { Component } from 'react'
import AttributeBox from '../../atoms/attributeBox'
import FlexContainer from '../../styles/flexContainer'
import Title from '../../styles/titles'

export default class Attributes extends Component {
  render() {
    console.log(this.props.attribute.items)
    return (
      <div>
        <Title weight={'700'} size={'1.125rem'} margin={'0'}>
          {this.props.attribute.id}:
        </Title>
        <FlexContainer>
          {
            this.props.attribute.items.map(item=>{
              return <AttributeBox key={item.id} item={item} />
            })
          }
        </FlexContainer>
      </div>
    )
  }
}
