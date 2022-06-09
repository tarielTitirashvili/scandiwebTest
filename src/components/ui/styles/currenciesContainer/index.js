import styled from 'styled-components';

const CurrenciesContainer = styled.div`
display: ${props=>props.display || 'flex'};
right: 78px;
top: 65px;
box-shadow: 0 4px 4px 4px #F7F7F7;
margin:${props=>props.margin || '0'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'center'};
height:${props=>props.height || '0'};
position: ${props=> props.position || 'absolute'};
background: ${props=>props.background || props.theme.colors.white}
}
`;
export default CurrenciesContainer;