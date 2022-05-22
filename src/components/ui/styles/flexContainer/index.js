import styled, {keyframes} from 'styled-components'

const openCurrencies=keyframes`
0%{
  background-color: #FFFFFF;
}
100%{
  background-color: #EEEEEE;
}
`

const FlexContainer = styled.div`
display: ${props=>props.display || 'flex'};
margin:${props=>props.margin || '0'};
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
height:${props=>props.height || '100%'};
cursor:${props=> props.cursor || 'default'};
position: ${props=> props.position || 'relative'};
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
`
export default FlexContainer