import React, { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash';
import Images from './Images';
import { getData } from "../actions/index";
import { DATA_LOADED } from '../constants/action-types';
import { URL } from '../constants/action-types';
//---------------------------------------------------------------------------
export class Post extends Component {
    //---------------------------------------------------------------------------
    componentDidMount() {
        // calling the new action creator
        this.props.getData(URL, DATA_LOADED);
    }
    //---------------------------------------------------------------------------
    render() {
        let component_load = null;
        if(!_.isEmpty(this.props.dogs))
            component_load = <Images/>
        
        return (
            component_load
        );
    }
}
//---------------------------------------------------------------------------
function mapStateToProps(state) {
    return {
        dogs: state.dogs,
        dogs_images: state.dogs_images
    };
}
//---------------------------------------------------------------------------
export default connect(
    mapStateToProps,
    { getData }
)(Post);