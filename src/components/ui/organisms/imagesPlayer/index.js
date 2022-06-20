import React, { Component } from 'react';
import styled from 'styled-components';
import FullGallery from '../../molecules/fullGallery';
import FlexContainer from '../../styles/flexContainer';

const SelectedImage = styled.img`
  max-width: 610px;
  max-height: 511px;
  margin-left: 25px;
  object-fit: cover;
`;
const GalleryContainer = styled(FlexContainer)`
  z-index: 0;
`

export default class ImagesPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImg: '',
    };
  }
  setSelectedImage = (url) => {
    this.setState({
      selectedImg: url,
    });
  };
  componentDidMount() {
    this.setState({
      selectedImg: this.props.gallery[0],
    });
  }
  render() {
    return (
      <GalleryContainer>
        <FullGallery gallery={this.props.gallery} setSelectedImage={this.setSelectedImage} />
        <SelectedImage src={this.state.selectedImg} />
      </GalleryContainer>
    );
  }
}
