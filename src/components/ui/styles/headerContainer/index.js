import styled from 'styled-components';

const HeaderContainer = styled.header`
display: grid;
height: 80px;
grid-template-columns: 40% 20% 40%;
position: relative;
hight:${props=>props.hight || '0'};
`;
export default HeaderContainer;