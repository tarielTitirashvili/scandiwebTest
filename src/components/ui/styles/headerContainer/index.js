import styled from 'styled-components'
import React, { Component } from 'react'

export default class HeaderContainer extends Component {
  render() {
    return <Container {...this.props}/>
  }
}

const Container = styled.header`
display: grid;
height: 80px;
grid-template-columns: 40% 20% 40%;
hight:${props=>props.hight || '0'};
`