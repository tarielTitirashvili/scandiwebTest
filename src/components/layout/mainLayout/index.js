import React from 'react';
import { routes } from '../../../routes';
import {
  Navigate, Route, Routes, useHistory, useLocation,
} from 'react-router-dom';
import Category from '../../pages/category';
import styled from 'styled-components'
import Header from '../../ui/organisms/header';
import { GET_CATEGORIES } from '../../../query';
import { client } from './../../../';

const AppContainer = styled.div`
padding: 0 101px 0 101px;
width: calc(100vw-202px);
`

export class MainLayout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      categories: []
    }
    this.onClick=this.onClick.bind(this)
  }
  onClick(name){
    console.log(name)
    this.setState(({
      name: name
    }),console.log(this.state.name))
  }
  getDate = async () => {
    const {data} = await client.query({
      query: GET_CATEGORIES
    })
    this.setState((
      {
        name: data.categories[0].name,
        categories: data.categories
      }
    ), ()=>console.log(this.state.categories, this.state.name))
  }
  componentDidMount(){
    this.getDate()
  }

  render(){
    return(
      <AppContainer>
        <Header 
          name = { this.state.name } 
          categories = { this.state.categories } 
          onClick = { this.onClick }
        />
        <Routes>
          <Route 
            path='/category' 
            element = {<Category name={this.state.name} />} 
          />
          { routes.map((route) => {
            const result = [];
            if (route.children) {
              result.push(...route.children.map((child) => (
                <Route 
                  key={ child.path } 
                  path={ child.path } 
                  element = {child.component}
                />
              )));
            }
            result.push((
              <Route 
                key={ route.path } 
                path={ route.path } 
                element = {route.component} 
              />
            ));
            return result;
          }) }
          <Route path='/' element = { <Navigate replace to='/category' /> } />
          <Route path='*' element = { <Navigate replace to='/error404' /> } />
        </Routes>
      </AppContainer>
    )
  }
}