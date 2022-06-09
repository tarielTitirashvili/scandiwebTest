import React from 'react';

const withTotalPrice = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        total: 0,
      };
    };
    getTotal=()=>{
      let total = 0;
      this.props.products.forEach(product=>{
        product.product.prices.forEach(currency=>{
          if(currency.currency.symbol===this.props.currency){
            total = total + product.quantity*currency.amount;
          };
        });
      });
      total = Math.round(total*100)/100;
      this.setState(({
        total: total
      }));
    };
    componentDidUpdate(prevProps){
      if(
        (this.props.quantity !== prevProps.quantity) || 
        (this.props.products.length!==prevProps.products.length) || 
        (this.props.currency !== prevProps.currency)
      ){
        this.getTotal();
      };
    };
    render() {
      return <WrappedComponent 
        {...this.props} 
        total={this.state.total} 
      />;
    };
  };
  return HOC;
};

export default withTotalPrice;