import React, { Component } from 'react'
import * as SoloAPI from '../../apis/SoloEscape.js'

class Main extends Component {

  componentDidMount() {
    console.log(333333);
    SoloAPI.getTag();
  }

  render() {
    return (
      <div>Hello world!
        {/* <img src={require("../../images/solo.png")} /> */}
      </div>
    )
  }
}

export default Main;