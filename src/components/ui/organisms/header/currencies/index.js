import React, { Component } from 'react'
import Vector from '../../../../../assets/Vector.svg'
import FlexContainer, { HoveredContainer } from '../../../styles/flexContainer'
import Title from '../../../styles/titles'
import CurrenciesContainer from './../../../styles/currenciesContainer/index';

export default class Currency extends Component {
  onClickHandler(symbol){
    this.props.onCurrencyClick()
    this.props.onChangeCurrency(symbol)
    window.history.replaceState(null, null, `http://${window.location.host}${window.location.pathname}?currency=${symbol}`)
  }
  render() {
    return (
      <FlexContainer
        align = {'center'}
        hight = {'80px'}
        position = {'relative'}
      >
        <FlexContainer
          onClick={()=>{this.props.onCurrencyClick()}}
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
            {this.props.currency}
          </Title>
          <img 
            src={Vector} 
            alt = {'vector'} 
            style={{transform: `${this.props.currenciesOpen?'rotateZ(180deg)':'rotateZ(0deg)'}`}} 
          />
        </FlexContainer>
        <CurrenciesContainer 
          display = {this.props.currenciesOpen?'inline':'none'} 
          height = {`${45*this.props.currencies.length}px`} 
          opened = {true}
        >
          {
            this.props.currencies.map((currency)=>{
              return<HoveredContainer 
                key={`${currency.symbol}${currency.label}`}
                onClick = {()=>this.onClickHandler(currency.symbol)}
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
