import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem, LeftNav } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import 'typeface-roboto';
import { Link } from 'react-router-dom';
import history from '../../history'
import { Button } from 'react-mdl';
import * as SoloAPI from '../../apis/SoloEscape.js'




const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
    hamburgerOpen: false,
    visible: true,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };

  handleToggle = () => {
    this.setState({ hamburgerOpen: !this.state.hamburgerOpen });
  };

  handleClose = () => {
    this.setState({ hamburgerOpen: false });
  };

  handleMenuOnClick = (index) => {
    if (index == 0)
      history.push('');
    else if (index == 1)
      history.push('/signin');
    else if (index == 2)
      history.push('/profile');
    else if (index == 3)
      history.push('/partner');
  };

   hanleLoginClick = async (index) => {
   if(index)
   const res = await SoloAPI.signIn();
   this.setState({ visible: false });   
  };


  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { visible } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="#FFFFFF">
          <Toolbar>
            <img src={require("../../images/solo.png")} align="left" width="50" height="50" onClick={() => this.handleMenuOnClick(0)} />
            {auth && (
              <div>
                <Button  style={{marginLeft:'100px'}} onClick={() => this.handleMenuOnClick(1)}>Signin</Button>
                <Button  onClick={() => this.handleMenuOnClick(2)}>Profile</Button>
                <Button  onClick={() => this.handleMenuOnClick(3)}>Partner</Button>
                { visible &&
                  <Button  onClick={() => this.hanleLoginClick(1)} style={{position: 'absolute', right: 10}} raised accent ripple >Login</Button>
                }
                { !visible &&
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  style={{position: 'absolute', right: 10 , bottom: 7}}
                  onClick={this.handleMenu}
                >
                  <AccountCircle />
                </IconButton>
                }
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
