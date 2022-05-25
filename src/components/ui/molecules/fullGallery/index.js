import React, { Component } from 'react'
import styled from 'styled-components';
import FlexContainer from '../../styles/flexContainer';


const GalleryImage = styled.img`
width: 140px;
height:87px;
object-fit: cover;
margin-bottom: 32.4px;
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

export default class FullGallery extends Component {

  render() {
    return (
      <FlexContainer width={'150px'} height={'511px'} overflow={'auto'}>
        {
          this.props.gallery.map((photo)=>{
            return <GalleryImage key={photo} onClick={()=>this.props.setSelectedImage(photo)} src={photo} alt="gallery"/>
          })
        }
      </FlexContainer>
    )
  }
}
