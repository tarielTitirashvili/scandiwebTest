import React, { Component } from 'react'
import styled from 'styled-components';
import vectorRight from '../../../../assets/Vector(1).svg'
import vectorLeft from '../../../../assets/Vector(2).svg'

const Img = styled.img`
width: 200px;
height: 288px;
object-fit: cover;
margin-left: 24px;
`
const ChangeImageButton = styled.div`
background-color: rgba(0, 0, 0, 0.73);
height: 24px;
width: 24px;
cursor: pointer;
margin-left: ${props=>props.marginLeft || '0'};
display:flex;
justify-content: center;
align-items: center;
`
const ButtonContainer = styled.div`
position: absolute;
top: 248px;
left: 128px;
width: 56px;
display: flex;
`

export default class CartImagePlayer extends Component {
  constructor(props){
    super(props)
    this.state={
      imageNum: 0
    }
  }
  onIncrease=()=>{
    if(this.state.imageNum===this.props.gallery.length-1){
      this.setState(({
        imageNum: 0
      }))
    }else{
      this.setState(prev=>({
        imageNum: prev.imageNum+1
      }))
    }
  }
  onDecrease=()=>{
    if(this.state.imageNum===0){
      this.setState(({
        imageNum: this.props.gallery.length-1
      }))
    }else{
      this.setState(prev=>({
        imageNum: prev.imageNum-1
      }))
    }
  }
  componentDidUpdate(){
    console.log(this.state.imageNum)
  }
  render() {
    return (
      <span style={{position: 'relative'}}>
        <Img src={this.props.gallery[this.state.imageNum]} alt={this.props.name} />
        <ButtonContainer>
          <ChangeImageButton onClick={this.onDecrease}>
            <img src={vectorLeft} alt='vectorLeft' />
          </ChangeImageButton>
          <ChangeImageButton onClick={this.onIncrease} marginLeft={'8px'}>
            <img src={vectorRight} alt='vectorRight' />
          </ChangeImageButton>
        </ButtonContainer>
      </span>
    )
  }
}
