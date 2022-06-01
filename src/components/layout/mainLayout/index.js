import React from 'react';
import {
  Navigate, Route, Routes
} from 'react-router-dom';
import Category from '../../pages/category';
import styled from 'styled-components'
import Header from '../../ui/organisms/header';
import { GET_CATEGORIES, GET_CURRENCIES } from '../../../graphQL/query';
import { client } from './../../../';
import Product from '../../pages/product';
import Cart from '../../pages/cart';

const AppContainer = styled.div`
padding: 0 101px 0 101px;
@media screen and (max-width: 660px){
  padding: 0 50px 0 50px;
}
@media screen and (max-width: 425px){
  padding: 0 20px 0 20px;
}
@media screen and (max-width: 300px){
  padding: 0 5px 0 5px;
}
`
export class MainLayout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      currency: '',
      currencies: [],
      categories: [],
      cartChanged: false,
    }
  }
  onCartStateChange=()=>{
    this.setState((prev)=>({
      cartChanged: !prev.cartChanged
    }))
  }
  onClick=(name)=>{
    this.setState(({
      name: name
    }))
  }
  onChangeCurrency=(newCurrency)=>{
    this.setState(({
      currency: newCurrency
    }))
  }
  getDate = async () => {
    const {data} = await client.query({
      query: GET_CATEGORIES
    })
    this.setState((
      {
        categories: data.categories
      }
    ))
  }
  getCurrencies = async()=>{
    const {data} = await client.query({
      query: GET_CURRENCIES
    })
    if(!this.state.currency){
      this.setState(({
        currencies: data.currencies,
        currency: data.currencies[0].symbol,
      }))
    }else{
      this.setState(({
        currencies: data.currencies,
      }))
    }
  }
  getParams(){
    const urlCurrency = new URLSearchParams(window.location.search).get('currency')
    const pathArray = window.location.pathname.split('/')
    if(pathArray[1]==="category"&&this.state.name!==pathArray[2]){
      this.setState(({
        name: pathArray[2]
      }))
    }
    if(urlCurrency!==null){
      this.setState(({
        currency: urlCurrency
      }))
    }
  }
  componentDidMount(){
    this.getParams()
    this.getDate()
    this.getCurrencies()
  }
  render(){
    return(
      <AppContainer>
        <Header 
          cartChanged = {this.state.cartChanged}
          onCartStateChange = {this.onCartStateChange}
          onChangeCurrency = {this.onChangeCurrency}
          name = { this.state.name } 
          categories = { this.state.categories } 
          onClick = { this.onClick }
          currencies = {this.state.currencies}
          currency = {this.state.currency}
        />
        <Routes>
          <Route 
            path='/category/:name' 
            element = {
            <Category 
              onCartStateChange = {this.onCartStateChange}
              onClick = { this.onClick } 
              name={this.state.name} 
              currency={this.state.currency}
            />
            }
          />
          <Route 
            path='/product/:id' 
            element = {<Product 
              onCartStateChange={this.onCartStateChange}
              name={this.state.name} 
              currency={this.state.currency}
            />} 
          />
          <Route 
            path='/cart' 
            element = {<Cart name={this.state.name} currency={this.state.currency} />} 
          />
          <Route path='/' element = { <Navigate replace to={`/category${'/'+this.state.name}`} /> } />
          <Route path='*' element = { <Navigate replace to='/error404' /> } />
        </Routes>
      </AppContainer>
    )
  }
}