import styled, {css, keyframes} from 'styled-components';

const openCurrencies=keyframes`
0%{
  background-color: #FFFFFF;
}
100%{
  background-color: #EEEEEE;
}
`;

export const SpaceBetweenContainer = styled.div`
display: flex; 
justify-content: space-between;
${props =>props.dropdownCart && css`
margin: 40px 0;
`
}
${props =>props.cartProduct && css`
margin: 24px 0;
`
}
${props =>props.dropdownTotalWrapper && css`
  margin: 32px 16px; 
`
}
`

const FlexContainer = styled.div`
display: ${props=>props.display || 'flex'};
margin:${props=>props.margin || '0'};
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
height:${props=>props.height || ''};
width:${props=>props.width || ''};
cursor:${props=> props.cursor || 'default'};
position: ${props=> props.position || 'static'};
flex-wrap: wrap;
z-index: ${props=>props.zIndex || '1'};
background-color:${props=>props.backgroundColor || props.theme.colors.white};
${props =>props.lowZIndex && css`
z-index: 0
`
}
`;

export const CenteredFlexContainer =styled(FlexContainer)`
justify-content: center;
`

export const HoveredContainer = styled.div`
display: flex;
padding: 8px 0 8px 0;
width: 114px;
justify-content: center;
align-items: center;
cursor: pointer;
height: 29px;
&:hover {
  animation: ${openCurrencies} 1s;
  animation-fill-mode: forwards;
}
`;
export const ScreenDarker = styled.div`
display: ${props=> props.display || 'block'};
position: absolute;
top: ${props => props.top || '52px'};
right: ${props=> props.right || '-101px'};
width: 100vw;
height: ${props => props.height+'px' || 'calc(100vh - 80px)'};
background-color: ${props => props.backgroundColor || '#39374838'};
`;
export default FlexContainer;