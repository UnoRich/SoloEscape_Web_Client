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
    profiles,
    textInputValue,
  }) => {
    
    return (partners && partners.map && profiles && profiles.map) 
      ? partners.reduce((res, partner, idx) => {
            if (findMatchedProfile(partner.id, profiles) === null ){
                return res;
            }
            var objurl = window.URL.createObjectURL(new Blob([new Uint8Array(findMatchedProfile(partner.id, profiles).data[0].picture.data)], { type: "image/gif" }));
            const Img = new Image(200, 200);
            Img.src = objurl;
       
       if(partner.name.includes(textInputValue))
          res.push(
            <ListItem key={idx}>
                <Avatar alt={partner.name} src={objurl} />
                <ListItemText primary={partner.name} />
                <ListItemSecondaryAction>
                    <Button fab mini color="primary" aria-label="favorite">
                        <FavoriteIcon />
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>    
        );
       else
       ;
        return res;
      }, [])
      : null;
  }

const findMatchedProfile = ((id, profiles) => {
    for (const profile of profiles) {
        if (!profile.data[0]) {
            continue;
        }
        if (profile.data[0].id.toString() === id) {
            return profile;
        }
    }
    return null;
});

class SoloItemComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Partners partners={this.props.partners} profiles={this.props.profiles} textInputValue={this.props.textInputValue} />        
        );
    }
}

SoloItemComponent.propTypes = {

};

export default withStyles( styles )( SoloItemComponent );