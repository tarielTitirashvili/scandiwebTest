import React from 'react';
import { routes } from '../../../routes';
import {
  Navigate, Route, Routes, useHistory, useLocation,
} from 'react-router-dom';
import Category from '../../pages/category';

export class MainLayout extends React.Component {
  render(){
    return(
      <div>
        <Routes>
          <Route path={ '/category' } element = {<Category/>}/>
          { routes.map((route) => {
            const result = [];
            if (route.children) {
              result.push(...route.children.map((child) => (
                <Route key={ child.path } path={ child.path } element = {child.component}/>
              )));
            }
            result.push((
              <Route key={ route.path } path={ route.path } element = {route.component}/>
            ));
            return result;
          }) }
          <Route path='/' element = { <Navigate replace to='/category' /> } />
          <Route path='*' element = { <Navigate replace to='/error404' /> } />
        </Routes>
      </div>
    )
  }
}