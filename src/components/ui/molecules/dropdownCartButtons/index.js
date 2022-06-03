import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartButton from '../../styles/Button';

const ViewBagButton=styled.div`
width: 138px;
height: 41px;
display: flex;
align-items: center;
font-weight: 600;
font-size: 0.875rem;
color: ${props=>props.color || props.theme.colors.text};
justify-content: center;
background: ${props=>props.color || props.theme.colors.white};
border: ${props=>props.borderColor || '1px solid'+props.theme.colors.text};
`
const CheckOutButton = styled(CartButton)`
width: 140px;
height: 43px;
padding: 0;
`
export default class DropdownCartButtons extends Component {
  componentDidMount(){
    window.addEventListener('storage', event=>{
      console.log(event)
    })
  }
  onCheckOut=()=>{
    localStorage.removeItem('cart')
    console.log(this.props.total)
    this.props.onCartButtonClick()
  }
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <NavLink  onClick={this.props.onCartButtonClick} to={'/cart'}>
          <ViewBagButton>
            VIEW BAG
          </ViewBagButton>
        </NavLink>
        <CheckOutButton onClick={this.onCheckOut}>
          CHECK OUT
        </CheckOutButton>
      </div>
    )
  }
}
