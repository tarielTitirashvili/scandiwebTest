import React, { Component } from 'react';
import withTotalPrice from '../../../hoc/withTotalPrice';
import DropdownCartButtons from '../../molecules/dropdownCartButtons';
import DropdownProduct from '../../molecules/dropdownProduct';
import FlexContainer from '../../styles/flexContainer';
import { Text } from '../../styles/titles';

class DropdownCart extends Component {
  componentDidUpdate(prevProps){
    if(
      (this.props.quantity !== prevProps.quantity) || 
      (this.props.products.length!==prevProps.products.length) ||
      (this.props.cartOpen && !prevProps.cartOpen)
    ){
      this.props.getTotal();
    };
  };
  render() {
    return (
      <div  onClick={(e)=>e.stopPropagation()}>
        <FlexContainer margin={'0 0 32px 0'} justify={'left'} >
          <Text cursor={'text'} weight={'700'}  margin={'0'} >
            My Bag, 
          </Text>
          <Text cursor={'text'} margin = {'0 0 0 4px'}>
            {this.props.quantity} items
          </Text>
        </FlexContainer>
        <FlexContainer display = {'inline'} >
          {this.props.products.map((product, index)=>{
            return<DropdownProduct 
              onCartStateChange ={this.props.onCartStateChange}
              onChangeCount = {this.props.onChangeCount}
              key={`${product.product.id}${index}`}
              product = {product} 
              index = {index}
              pushSelectedAtr={this.props.pushSelectedAtr}
              currency = {this.props.currency}
            />;
          })}
        </FlexContainer>
        <FlexContainer margin={'32px 16px'} justify={'space-between'}>
          <Text fontFamily = {'\'Roboto\', sans-serif'} cursor={'text'} margin={'0'} weight={'500'}>
            Total
          </Text>
          <Text cursor={'text'} weight={'700'}  margin={'0'} >
           {this.props.currency}{this.props.total}
          </Text>
        </FlexContainer>
        <DropdownCartButtons 
          onClick = {this.props.onClick}
          currency={this.props.currency}
          total ={this.props.total} 
          onCartButtonClick = {this.props.onCartButtonClick} 
          onCheckOut = {this.props.onCheckOut}
        />
      </div>
    );
  };
};

export default withTotalPrice(DropdownCart)