import React from 'react';
import './App.css';
import { MainLayout } from './components/layout/mainLayout';
import { client } from './index';
import { GET_CATEGORIES, GET_CURRENCIES } from './query';

export class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  async componentDidMount (){
    const {loading, data, error, partial, networkStatus} = await client.query({
      query: GET_CURRENCIES
    })
  } 
  render(){ 
    return (
      <div className="App">
        <MainLayout />
      </div>
    )
  }
}

export default App;
