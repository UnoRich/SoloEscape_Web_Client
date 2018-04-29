import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import FavoriteIcon from 'material-ui-icons/Favorite';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
});

const Partners = ({
    partners,
  }) => {
    return (partners && partners.map) 
      ? partners.map((partner, idx) => {
        return (
            <ListItem key={idx}>
                <Avatar alt={partner.name} src="http://www.pickywallpapers.com/2560x1600/female-celebrities/emma-watson/emma-watson-black-and-white-profile-wallpaper/download/?get" />
                <ListItemText primary={partner.name} />
                <ListItemSecondaryAction>
                    <Button fab mini color="primary" aria-label="favorite">
                        <FavoriteIcon />
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>    
        );
      })
      : null;
  }

class SoloItemComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Partners partners={this.props.partners}/>        
        );
    }
}

SoloItemComponent.propTypes = {

};

export default withStyles( styles )( SoloItemComponent );