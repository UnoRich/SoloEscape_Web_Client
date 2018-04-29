import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoloList from './SoloList';
import SoloItem from './SoloItem';
import * as SoloAPI from '../../apis/SoloEscape.js'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            partners: {},
        }
    }

    async componentDidMount() {
        var res = await SoloAPI.getGoogleUser();
        this.setState(() => {
            return {
                partners: res.data,
            };
          });
    }

    render() {
        return ( 
            <div>
                <SoloList>
                    <SoloItem {...this.state}/>
                </SoloList>
            </div>
        );
    }
}

export default Main;