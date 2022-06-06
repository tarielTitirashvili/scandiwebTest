import React from 'react'

const withTotalPrice = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        total: 0,
      }
    }
    pushSelectedAtr=(name, value, selected, index)=>{
      this.props.onAtrSelect(name, value, selected, index)
    }
    getTotal=()=>{
      let total = 0
      this.props.products.forEach(product=>{
        product.product.prices.forEach(currency=>{
          if(currency.currency.symbol===this.props.currency){
            total = total + product.quantity*currency.amount
          }
        })
      })
      total = Math.round(total*100)/100
      this.setState(({
        total: total
      }))
    }
    render() {
      return <WrappedComponent 
        {...this.props} 
        total={this.state.total} 
        pushSelectedAtr = {this.pushSelectedAtr} 
        getTotal={this.getTotal}
      />
    }
  }
  return HOC
}

export default withTotalPrice