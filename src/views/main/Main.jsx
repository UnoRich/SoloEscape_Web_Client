import React, { Component } from 'react'
import * as SoloAPI from '../../apis/SoloEscape.js'
import { Parallax } from 'react-parallax';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image1 = require('./coupleimg1.jpg');
const image2 = require('./coupleimg2.jpg');
const image3 = require('./coupleimg3.jpg');

class Main extends Component {

  componentDidMount() {
  }

  render() {
    return (
      
    <div style={styles}>
    <h1>Hello SoloEscape</h1>
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: 500}}>
        <div style={insideStyles}>#그동안 없었던</div>
      </div>
    </Parallax>
    <div style={{lineHeight: 8}}><br/></div>
    <Parallax bgImage={image3} 
      strength={500}>
      <div style={{height: 500}}>
        <div style={insideStyles}>#특별한 소개팅의 시작</div>
      </div>
    </Parallax>
    <div style={{lineHeight: 8}}><br/></div>
    <Parallax bgImage={image2} 
      strength={500}>
      <div style={{height: 500}}>
        <div style={insideStyles}>#솔로 이스케이프</div>
      </div>
    </Parallax>
    <div style={{height: 0}}>
      </div>
    <h2>{'\u2728'}</h2>
  </div>
    )
  }
}

export default Main;