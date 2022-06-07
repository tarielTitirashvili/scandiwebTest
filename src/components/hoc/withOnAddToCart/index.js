import React from 'react';

const withOnAddToCart = WrappedComponent => {
  class HOC extends React.Component {
    onAddToCart = (selectedAtr) => {
      let cart = JSON.parse(localStorage.getItem('cart'));
      let isInCart = false;
      if(cart){
        cart.forEach(cartProduct=>{
          if(cartProduct.product.id===this.props.product.id){
            let count = 0;
            cartProduct.selectedAtr.forEach(atrInCart=>{
              selectedAtr.forEach(atr=>{
                if(atrInCart.name===atr.name&&atrInCart.value===atr.value){
                  count = count+1;
                };
              });
            });
            if(count === cartProduct.selectedAtr.length)return isInCart=true;
          };
        });
      };
      if(selectedAtr.length===this.props.product.attributes.length && !isInCart){
        if(cart){
          localStorage.setItem('cart', JSON.stringify([
            ...cart, {
              product: this.props.product, 
              selectedAtr: selectedAtr,
              quantity: 1
            }
          ]));
        }else{
          localStorage.setItem('cart', JSON.stringify([
            {
              product: this.props.product, 
              selectedAtr: selectedAtr,
              quantity: 1
            }
          ]));
        };
      };
    };
    render() {
      return <WrappedComponent {...this.props} onAddToCart = {this.onAddToCart} />;
    };
  };
  return HOC;
};

export default withOnAddToCart;