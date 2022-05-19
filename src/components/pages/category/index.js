import React, { Component } from "react";
import { GET_CATEGORIES_AND_PRODUCTS } from "../../../query";
import { client } from './../../../index';

export const SelectedCategoryProvider = React.createContext()

export default class Category extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      name: 'all',
      products: [],
    }
  }
  getDate = async () => {
    const {loading, data, error, partial, networkStatus} = await client.query({
      query: GET_CATEGORIES_AND_PRODUCTS
    })
    for(let i=0; i<data.categories.length; i++){
      if(data.categories[i].name === this.state.name){
        this.setState((prev)=>(
          {
            ...prev,
            loading: loading,
            products: data.categories[i].products
          }
        ), ()=>console.log(this.state.products))
      } 
    }
  }
  componentDidMount(){
    this.getDate()
  }
  render(){
    return(
      <div style={{backgroundColor: 'red'}}>

      </div>
    )
  }
}