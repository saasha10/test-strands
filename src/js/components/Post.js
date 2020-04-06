import React, { Component } from "react"
import isEmpty from 'lodash/isEmpty'
import Images from '../containers/Images'
import { DATA_LOADED, URL } from '../constants/action-types'
//---------------------------------------------------------------------------
export default class Post extends Component {
    //---------------------------------------------------------------------------
    componentDidMount() {
        // calling the new action creator
        this.props.getData(URL, DATA_LOADED);
    }
    //---------------------------------------------------------------------------
    render() {
        const { loading } = this.props
        
        return (
            !loading && <Images/>
        );
    }
}