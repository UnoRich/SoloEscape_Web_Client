import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoloItemComponent from './SoloItemComponent';

class SoloItem extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (<SoloItemComponent { ...this.props }/> )
    }
}

export default SoloItem;