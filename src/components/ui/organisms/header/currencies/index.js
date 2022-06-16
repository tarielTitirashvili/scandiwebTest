import React, { Component } from 'react';
import Vector from '../../../../../assets/Vector.svg';
import FlexContainer, { HoveredContainer, ScreenDarker } from '../../../styles/flexContainer';
import Title from '../../../styles/titles';
import withGenerateHeight from '../../../../hoc/withGenerateHeight/index';
import styled, { css } from 'styled-components';

const CurrenciesWrapper = styled(FlexContainer)`
align: center;
hight: 80px;
position: relative;
`;
const DropdownButtonWrapper = styled(FlexContainer)`
cursor: pointer;
align: center;
margin: 0 22px 0 0;
hight: 80px;
`;
const CurrenciesContainer = styled.div`
display: inline;
right: 78px;
top: 65px;
box-shadow: 0 4px 4px 4px #F7F7F7;
margin:${props=>props.margin || '0'};
align-items: center;
justify-content: center;
height:${props=>props.height || '0'};
position: absolute;
background: ${props=>props.background || props.theme.colors.white}
`;
const CurrenciesDropdownContainer = styled(ScreenDarker)`
display: inline;
top: -29.2px;
right: -121px;
background-color: transparent;
`;
const CurrencyTitle = styled(Title)`
margin: 0;
font-weight: 500;
font-size: 1.125rem;
${props =>props.selectedCurrency && css`
  margin: 0 10px 0 0;
`
}
`;
const Img = styled.img`
transform: rotateZ(0deg);
${props =>props.open && css`
  transform: rotateZ(180deg);
`
}
`;

class Currency extends Component {
  onClickHandler(symbol, e){
    e.stopPropagation();
    this.props.onCurrencyClick();
    this.props.onChangeCurrency(symbol);
    window.history.replaceState(null, null, `http://${window.location.host}${window.location.pathname}?currency=${symbol}`);
  };
  render() {
    return (
      <CurrenciesWrapper>
        <DropdownButtonWrapper
          onClick={()=>{this.props.onCurrencyClick()}}
        >
          <CurrencyTitle 
            selectedCurrency
          >
            {this.props.currency}
          </CurrencyTitle>
          {
            this.props.currenciesOpen?
              <Img 
                src={Vector} 
                alt = {'vector'} 
                open 
              />
            :
              <Img 
                src={Vector} 
                alt = {'vector'} 
              />
          }
        </DropdownButtonWrapper>
        {
          this.props.currenciesOpen?
            <CurrenciesDropdownContainer
              height={this.props.generateHight()}
              onClick={()=>this.props.onCurrencyClick()}
            >
              {
                this.props.currenciesOpen?
                  <CurrenciesContainer 
                    height = {`${45*this.props.currencies.length}px`} 
                  >
                    {
                      this.props.currencies.map((currency)=>{
                        return<HoveredContainer 
                          key={`${currency.symbol}${currency.label}`}
                          onClick = {(e)=>this.onClickHandler(currency.symbol, e)}
                        >
                          <CurrencyTitle>
                          {`${currency.symbol} ${currency.label}`}
                          </CurrencyTitle>
                        </HoveredContainer>;
                      })
                    }
                  </CurrenciesContainer>
                :
                  ''
              }
            </CurrenciesDropdownContainer>
          :
            ''
        }
      </CurrenciesWrapper>
    );
  };
};

export default withGenerateHeight(Currency);