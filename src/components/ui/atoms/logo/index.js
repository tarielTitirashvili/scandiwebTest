import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt}/>
  }
}
