import React, { Component } from 'react'

export default class Cart extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div>{this.props.tariel}</div>
    )
  }
}
