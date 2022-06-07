import React, { Component } from 'react';
import styled from 'styled-components';
import FullGallery from '../../molecules/fullGallery';

const SelectedImage = styled.img`
width: 610px;
height: 511px;
object-fit: cover;
`;

export default class ImagesPlayer extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedImg: ''
    };
  };
  setSelectedImage=(url)=>{
    this.setState((
      {
        selectedImg: url
      }
    ));
  };
  componentDidMount(){
    this.setState((
      {
        selectedImg: this.props.gallery[0]
      }
    ));
  };
  render() {
    return (
      <>
        <FullGallery gallery ={this.props.gallery} setSelectedImage = {this.setSelectedImage} />
        <SelectedImage src={this.state.selectedImg} />
      </>
    );
  };
};
