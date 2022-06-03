import styled from 'styled-components'

const CartButton = styled.button`
background-color: ${props=>props.backgroundColor || props.theme.colors.primary};
margin: ${props=>props.margin || '0'}; 
font-size: 1rem;
line-height: ${props=>props.lineHeight||'120%'};
font-weight: ${props=>props.weight || 600};
width: 100%;
color: ${props=>props.color || props.theme.colors.white};
justify-content: center;
align-items: center;
border: none;
padding: ${props=>props.padding || '20px'};
cursor: pointer;
outline: inherit;
`
export default CartButton