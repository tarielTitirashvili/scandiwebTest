import styled from 'styled-components'
import React, { Component } from 'react'

export default class FlexContainer extends Component {
  render() {
    return <Container {...this.props}/>
  }
}

const Container = styled.div`
display: ${props=>props.display || 'flex'};
margin:${props=>props.margin || '0'};
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
hight:${props=>props.hight || '0'};
`