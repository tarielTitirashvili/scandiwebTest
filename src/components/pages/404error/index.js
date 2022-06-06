import React, { Component } from 'react'
import LoadingContainer from '../../ui/styles/loadingContainer'

export default class Error404 extends Component {
  render() {
    return (
      <LoadingContainer>
        <div>
          <h1>Error! 404 </h1> 
          <h2>page not found</h2>
        </div>
      </LoadingContainer>
    )
  }
}
