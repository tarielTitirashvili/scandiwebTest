import React, { Component } from 'react';
import styled from 'styled-components';
import FlexContainer from '../../styles/flexContainer';


const GalleryImage = styled.img`
width: 106.3px;
height:87px;
object-fit: cover;
margin-bottom: 32.4px;
`;
const GalleryContainer = styled(FlexContainer)`
width: 122.3px;
height: 511px;
z-index: 0;
overflow: auto;
`;

export default class FullGallery extends Component {

  render() {
    return (
      <GalleryContainer>
        {
          this.props.gallery.map((photo)=>{
            return <GalleryImage 
              key={photo} 
              onClick={()=>this.props.setSelectedImage(photo)} 
              src={photo} alt="gallery"
            />;
          })
        }
      </GalleryContainer>
    );
  };
};