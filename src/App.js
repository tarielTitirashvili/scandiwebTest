import React from 'react';
import { MainLayout } from './components/layout/mainLayout';
import { client } from './index';
import { GET_CURRENCIES } from './query';

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
      <>
        <MainLayout />
      </>
    )
  }
}

export default App;
