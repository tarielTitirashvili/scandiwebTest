import React from 'react'

const withCartFunctionality = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props){
      super(props)
      this.state={
        quantity: 0,
        products: []
      }
    }
    onCheckOut=()=>{
      this.setState(({
        quantity: 0,
        products: []
      }))
    }
    onAtrSelect=(name, value, selected, index)=>{
      let cliCkedProductId = this.state.products[index].product.id
      let filteredSelectedAtr = undefined
      let isProductWithSameParams = false
      let product = {
        product: this.state.products[index].product,
        quantity: this.state.products[index].quantity,
        selectedAtr: [...this.state.products[index].selectedAtr]
      }
      if(selected.length!==0){
        filteredSelectedAtr = product.selectedAtr.filter(selected=>selected.name!==name)
        product.selectedAtr=filteredSelectedAtr
      }
      let filteredProducts = this.state.products.filter((product, i)=>i!==index)
      product.selectedAtr.push({name: name, value: value})
      filteredProducts.forEach(randomProduct=>{
        if(randomProduct.product.id===cliCkedProductId){
          let sameValues = 0
          randomProduct.selectedAtr.forEach(attribute=>{
            product.selectedAtr.forEach(atr=>{
              if(attribute.name === atr.name && attribute.value===atr.value ){
                sameValues=sameValues+1
              }
            })
          })
          if(sameValues===product.selectedAtr.length){
            isProductWithSameParams = true
          }
        }
      })
      filteredProducts.splice(index, 0, product)
      if(!isProductWithSameParams){
        this.setState(({
          products: [ ...filteredProducts]
        }))
      }
    }
    onChangeCount=(change, index)=>{
      let filteredProducts = this.state.products.filter((product, i)=>i!==index)
      let product = {
        product: this.state.products[index].product,
        quantity: this.state.products[index].quantity,
        selectedAtr: [...this.state.products[index].selectedAtr]
      }
      product.quantity = product.quantity+change
      if(product.quantity>0){
        filteredProducts.splice(index, 0, product)
        this.setState(prev=>({
          products: [...filteredProducts],
          quantity: prev.quantity+change
        }))
      }else{
        this.setState(prev=>({
          products: [...filteredProducts],
          quantity: prev.quantity+change
        }))
        localStorage.setItem('cart', JSON.stringify([...filteredProducts]))
      }
    }
    getQuantity=()=>{
      let cart = JSON.parse(localStorage.getItem('cart'))
      let quantity = 0
      if(cart){
        cart.forEach(product=>{
          quantity = quantity + product.quantity
        })
      }
      this.setState(({
        quantity: quantity
      }))
    }
    setProducts=(products)=>{
      this.setState(({
        products: products
      }))
    }
    componentDidMount(){
      this.getQuantity()
    }
    componentDidUpdate(prevProps){
      if(prevProps.cartChanged!==this.props.cartChanged){
        this.getQuantity()
      }
    }
    render() {
      return <WrappedComponent 
        {...this.props} 
        quantity={this.state.quantity} 
        products = {this.state.products} 
        getQuantity={this.getQuantity}
        setProducts={this.setProducts}
        onCheckOut={this.onCheckOut}
        onAtrSelect = {this.onAtrSelect}
        onChangeCount = {this.onChangeCount}
      />
    }
  }
  return HOC
}

export default withCartFunctionality