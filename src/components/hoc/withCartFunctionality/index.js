import React from 'react';

const withCartFunctionality = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props){
      super(props);
      this.state={
        quantity: 0,
        products: []
      };
    };
    onCheckOut=()=>{
      this.setState(({
        quantity: 0,
        products: []
      }),()=>{
        localStorage.setItem('cart', JSON.stringify(this.state.products));
        this.getQuantity()
        this.props.onCartStateChange()
      });
    };
    onChangeCount=(change, index)=>{
      let filteredProducts = this.state.products.filter((product, i)=>i!==index);
      let product = {
        product: this.state.products[index].product,
        quantity: this.state.products[index].quantity,
        selectedAtr: [...this.state.products[index].selectedAtr]
      };
      product.quantity = product.quantity+change;
      if(product.quantity>0){
        filteredProducts.splice(index, 0, product);
        this.setState(prev=>({
          products: [...filteredProducts],
          quantity: prev.quantity+change
        }));
      }else{
        this.setState(prev=>({
          products: [...filteredProducts],
          quantity: prev.quantity+change
        }));
      };
      localStorage.setItem('cart', JSON.stringify([...filteredProducts]));
    }
    getQuantity=()=>{
      let cart = JSON.parse(localStorage.getItem('cart'));
      let quantity = 0;
      if(cart!==null){
        cart.forEach(product=>{
          quantity = quantity + product.quantity
        });
      }else{
        this.setState(({
          products: []
        }))
      }
      this.setState(({
        quantity: quantity
      }));
    };
    setProducts=(products)=>{
      this.setState(({
        products: products
      }));
    };
    componentDidMount(){
      this.getQuantity();
    };
    componentDidUpdate(prevProps){
      if(prevProps.cartChanged!==this.props.cartChanged){
        let cart = JSON.parse(localStorage.getItem('cart'));
        this.setProducts(cart);
        this.getQuantity();
      };
    };
    render() {
      return <WrappedComponent 
        {...this.props} 
        quantity={this.state.quantity} 
        products = {this.state.products} 
        onCheckOut={this.onCheckOut}
        onChangeCount = {this.onChangeCount}
        setProducts={this.setProducts}
      />;
    };
  };
  return HOC;
};

export default withCartFunctionality;