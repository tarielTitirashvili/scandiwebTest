import React, { Component } from 'react'
import Vector from '../../../../../assets/Vector.svg'
import FlexContainer, { HoveredContainer } from '../../../styles/flexContainer'
import Title from '../../../styles/titles'
import CurrenciesContainer from './../../../styles/currenciesContainer/index';

export default class Currency extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: true
    }
  }
  onCurrencyClick(){
    this.setState(prev=>({
        isOpen: !prev.isOpen
    }))
  }
  render() {
    return (
      <FlexContainer
        align = {'center'}
        hight = {'80px'}
        position = {'relative'}
      >
        <FlexContainer
          onClick={()=>{this.onCurrencyClick()}}
          cursor={'pointer'}
          align = {'center'} 
          margin = {'0 22px 0 0'} 
          hight = {'80px'}
        >
          <Title
            margin = {'0 10px 0 0'} 
            size = {'1.125rem'}
            weight={'500'}
          >
            {this.props.currency.symbol}
          </Title>
          <img 
            src={Vector} 
            alt = {'vector'} 
            style={{transform: `${this.state.isOpen?'rotateZ(0deg)':'rotateZ(180deg)'}`}} 
          />
        </FlexContainer>
        <CurrenciesContainer 
          display = {this.state.isOpen?'none':'inline'} 
          height = {`${45*this.props.currencies.length}px`} 
          opened = {true}
        >
          {
            this.props.currencies.map((currency)=>{
              return<HoveredContainer 
                key={`${currency.symbol}${currency.label}`}
                onClick = {()=>{this.props.onChangeCurrency(currency)
                  this.onCurrencyClick()}}
              >
                <Title 
                  weight = {'500'} 
                  margin={'0'} 
                  size = {'1.125rem'}
                >
                 {`${currency.symbol} ${currency.label}`}
                </Title>
              </HoveredContainer>
            })
          }
        </CurrenciesContainer>
      </FlexContainer>
    )
  }
}
