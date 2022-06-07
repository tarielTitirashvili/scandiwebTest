import React, { Component } from 'react'
import styled from 'styled-components';
import { Text } from '../../styles/titles';

const StyledSquare = styled.div`
width: 22px;
height: 22px;
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
border: ${props=>props.borderColor || '1px solid'+props.theme.colors.text};
`;
const Container = styled.div`
margin: 0 8px 0 4px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export default class DropdownProductQuantity extends Component {
  
  render() {
    return (
      <Container>
        <StyledSquare 
          onClick={()=>{
            this.props.onChangeCount(1, this.props.index);
            this.props.onCartStateChange();
          }}
        >
          +
        </StyledSquare>
        <Text 
          margin={'0'}
        >
          {this.props.quantity}
        </Text>
        <StyledSquare
          onClick={()=>{
            this.props.onChangeCount(-1, this.props.index);
            this.props.onCartStateChange();
          }}
        >
          -
        </StyledSquare>
      </Container>
    );
  };
};
