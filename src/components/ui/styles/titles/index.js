import styled, { css } from 'styled-components'
import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return <StyledTitle {...this.props} />
  }
}

const StyledTitle = styled.h1`
margin: ${props=>props.margin || '28px 16px 32px 16px'}; 
font-size: ${props=> props.size || '1rem'};
line-height: 120%;
font-weight: ${props=>props.weight || props.theme.colors.text};
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

export const SmallTitle = styled.h3`
margin: ${props=>props.margin || '28px 16px 32px 16px'}; 
font-size: ${props=> props.size || '1rem'};
line-height: 120%;
font-weight: ${props=>props.weight || props.theme.colors.text};
cursor: pointer;
`

export const Text = styled.h6`
margin: ${props=>props.margin || '28px 16px 32px 16px'}; 
font-size: ${props=> props.size || '1rem'};
line-height: 120%;
font-weight: ${props=>props.weight || props.theme.colors.text};
cursor: pointer;
position: ${props=>props.position || 'static'}
`