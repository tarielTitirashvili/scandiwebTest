import styled from 'styled-components'

const StyledContainer = styled.div`
display: ${props=>props.display || 'flex'};
left: -35px;
top: 65px;
box-shadow: 0 0.5px 0.5px 0.5px #888888
margin:${props=>props.margin || '0'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'center'};
height:${props=>props.height || '0'};
position: ${props=> props.position || 'absolute'};

}
`
export default StyledContainer