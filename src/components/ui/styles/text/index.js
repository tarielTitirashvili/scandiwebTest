import styled, { css } from "styled-components";

export const Text = styled.h6`
display: ${props=>props.display || 'block'};
margin: ${props=>props.margin || '28px 16px 32px 16px'}; 
font-size: ${props=> props.size || '1rem'};
line-height: 120%;
font-weight: ${props=>props.weight || props.theme.fontWeight.text};
font-family: ${props=>props.fontFamily|| '\'Raleway\', sans-serif'};
cursor: ${props=>props.cursor || 'pointer'};
position: ${props=>props.position || 'static'};
top: ${props=>props.top};
left: ${props=>props.left};
color: ${props=>props.color || props.theme.colors.text};
${props =>props.disabled && css`
 
`
}
${props =>props.dropdownBagItems && css`
cursor: text;
margin: 0 0 0 4px;
`
}
`;