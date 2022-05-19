import styled, { css } from 'styled-components'
import React, { Component } from 'react'

export default class NavTitle extends Component {
  render() {
    return <Title {...this.props} />
  }
}

const Title = styled.h1`
margin: 28px 16px 32px 16px;
font-size: 1rem;
line-height: 120%;
cursor: pointer;
${props =>props.selected && css`
  color: ${props=>props.color || props.theme.colors.primary};
  font-weight: ${props=>props.weight || props.theme.fontWeight.selectedNavTitle};
  margin-bottom: 30px
`
}
${props =>props.navTitle && css`
  color: ${props=>props.color || props.theme.colors.text};
  font-weight: ${props=>props.weight || props.theme.fontWeight.navTitle};
`
}
`