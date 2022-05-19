import React, { Component } from 'react'
import styled from 'styled-components'

export default class SelectedNavTitleStyle extends Component {
  render() {
    return <SelectedBackground {...this.props}/>
  }
}

const SelectedBackground = styled.div`
height: 2px;
width: 100%;
background-color: ${props=>props.backgroundColor || props.theme.colors.primary};
`