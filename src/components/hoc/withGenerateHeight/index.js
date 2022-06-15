import React from 'react';

const withGenerateHeight = WrappedComponent => {
  class HOC extends React.Component {
    generateHight=()=>{
      let winHeight = window.innerHeight;
      let rootDivHeight = document.getElementById("root").clientHeight;
      if(winHeight<rootDivHeight){
        return rootDivHeight;
      }else{
        return winHeight;
      };
    };
    render() {
      return <WrappedComponent 
        {...this.props} 
        generateHight={this.generateHight}
      />;
    };
  };
  return HOC;
};

export default withGenerateHeight;