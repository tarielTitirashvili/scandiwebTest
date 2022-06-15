import styled, { css } from 'styled-components';

const Title = styled.h1`
margin: ${props=>props.margin || '28px 16px 32px 16px'}; 
font-size: ${props=> props.size || '1rem'};
line-height: ${props=>props.lineHeight||'120%'};
font-weight: ${props=>props.weight || props.theme.fontWeight.text};
font-family: ${props=>props.fontFamily|| '\'Raleway\', sans-serif'};
cursor: ${props=> props.cursor || 'pointer'};
color: ${props=>props.color || props.theme.colors.text};
${props =>props.selected && css`
  color: ${props=>props.selectedColor || props.theme.colors.primary};
  font-weight: ${props=>props.weight || props.theme.fontWeight.selectedNavTitle};
  margin-bottom: 30px
`
}
${props =>props.navTitle && css`
  color: ${props=>props.navTitleColor || props.theme.colors.text};
  font-weight: ${props=>props.weight || props.theme.fontWeight.navTitle};
`
}
`; 


export const SmallTitle = styled.h3`
margin: ${props=>props.margin || '28px 16px 32px 16px'}; 
font-size: ${props=> props.size || '1rem'};
line-height: ${props=>props.lineHeight||'120%'};
font-weight: ${props=>props.weight || props.theme.fontWeight.text};
cursor: ${props=> props.cursor || 'pointer'};
color: ${props=>props.color || props.theme.colors.text};
`;


export default Title;