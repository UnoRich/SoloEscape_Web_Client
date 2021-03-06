import React, { Component } from 'react'
import { Button, Card, CardText, CardTitle, CardActions, CardMenu, IconButton, Textfield } from 'react-mdl';
import * as blueimp from 'blueimp-load-image';

class Profile extends Component {
  constructor(...props) {
    super(...props);
    this._handleClick = this._handleClick.bind(this);
    this._handleImageLoad = this._handleImageLoad.bind(this);
    this._handleClickSave = this._handleClickSave.bind(this);
    this._handleClickCancel = this._handleClickCancel.bind(this);
  }
  

  _handleClick(e) {
    console.log(1111);
  }

  _handleClickSave(e) {
    console.log(22);
  }

  _handleClickCancel(e) {
    console.log(33);
  }

  _handleImageLoad(e) {
    console.log("image Load");
    var loadingImage = blueimp(
      e.target.files[0],
      function (img) {
        console.log("img", img.src)
          document.getElementById("profileImage").appendChild(img);
      },
      {maxWidth: 256}
  );
  }
  

  render() {
    return (
      <div>
        profile world    
        <p><input type="file" id="file-input" onChange={this._handleImageLoad}/></p>
        <Card id ="profileImage"  style={{width: '256px', height: '256px', margin: 'auto'}}/>
        <Textfield
          onChange={() => {}}
          label="Nickname"
          style={{width: '200px'}}/>
        <div>
          <Button onClick={this._handleClickSave} style={{margin:'10px'}} raised accent ripple >SAVE</Button>
          <Button onClick={this._handleClickCancel} raised accent ripple>CANCEL</Button>
        </div>

      </div>
    )
  }
}


export default Profile;