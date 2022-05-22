import React, { Component } from 'react'
import styled from 'styled-components'

const SelectedNavTitleStyle = styled.div`
height: 2px;
width: 100%;
background-color: ${props=>props.backgroundColor || props.theme.colors.primary};
`

export default SelectedNavTitleStyle