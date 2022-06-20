import React from 'react';
import {
  Navigate, 
  Route, 
  Routes
} from 'react-router-dom';
import Category from '../../pages/category';
import styled from 'styled-components';
import Header from '../../ui/organisms/header';
import { GET_CATEGORIES, GET_CURRENCIES } from '../../../graphQL/query';
import { client } from './../../../';
import Product from '../../pages/product';
import Cart from '../../pages/cart';
import Loading from '../../pages/loading';
import Error404 from '../../pages/404error';

const AppContainer = styled.div`
padding: 0 101px 178px 101px;
background-color: ${props=>props.backgroundColor || props.theme.colors.white};
@media screen and (max-width: 660px){
  padding: 0 50px 60px 50px;
}
@media screen and (max-width: 425px){
  padding: 0 20px 40px 20px;
}
@media screen and (max-width: 300px){
  padding: 0 3px 10px 3px;
}
`;
export class MainLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      loading1: true,
      name: '',
      currency: '',
      currencies: [],
      categories: [],
      cartChanged: false,
    };
  };
  onCartStateChange=()=>{
    this.setState((prev)=>({
      cartChanged: !prev.cartChanged
    }));
  };
  onClick=(name)=>{
    this.setState(({
      name: name
    }));
  };
  onChangeCurrency=(newCurrency)=>{
    this.setState(({
      currency: newCurrency
    }));
  };
  getDate = async () => {
    const {data, loading} = await client.query({
      query: GET_CATEGORIES
    });
    if(!this.state.name){
      this.setState((
        {
          categories: data.categories,
          loading: loading
        }
      ));
    }else{
      this.setState((
        {
          categories: data.categories,
          loading: loading
        }
      ));
    };
  };
  getCurrencies = async()=>{
    const {data, loading} = await client.query({
      query: GET_CURRENCIES
    });
    if(!this.state.currency){
      this.setState((
        {
          currencies: data.currencies,
          currency: data.currencies[0].symbol,
          loading1: loading
        }
      ));
    }else{
      this.setState((
        {
          currencies: data.currencies,
          loading1: loading
        }
      ));
    };
  };
  getParams(){
    const urlCurrency = new URLSearchParams(window.location.search).get('currency');
    const pathArray = window.location.pathname.split('/');
    if(pathArray[1]==="category"&&this.state.name!==pathArray[2]){
      this.setState((
        {
          name: pathArray[2]
        }
      ));
    };
    if(urlCurrency!==null&& urlCurrency!==this.state.currency){
      this.setState((
        {
          currency: urlCurrency
        }
      ));
    };
  };
  componentDidMount(){
    this.getDate();
    this.getCurrencies();
    this.getParams();
  };
  componentDidUpdate(){
    if(this.state.name===''){
      this.getParams();
    };
  };
  render(){
    if(this.state.loading&&this.state.loading1){ 
      return<Loading/>;
    }else{
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
              element = {
                <Product 
                  onCartStateChange={this.onCartStateChange}
                  currency={this.state.currency}
                />
              } 
            />
            <Route 
              path='/cart'
              element = {
                <Cart 
                  cartChanged = {this.state.cartChanged}
                  onCartStateChange={this.onCartStateChange} 
                  currency={this.state.currency} 
                />
              } 
            />
            <Route path='/' element = { <Navigate replace to={`/category/${this.state.categories[0].name}`} /> } />
            <Route path='/error404' element={<Error404/>} />
            <Route path='*' element = { <Navigate replace to='/error404' /> } />
          </Routes>
        </AppContainer>
      );
    };
  };
};