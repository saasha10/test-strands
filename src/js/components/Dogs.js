import React, { Component } from "react"
import Images from '../containers/Images'
import { URL } from '../constants'
import { DATA_LOADED } from '../constants/action-types'

export default class Dogs extends Component {

    componentDidMount() {
        this.props.getData(URL, DATA_LOADED);
    }

    render() {
        const { loading } = this.props
        
        return (
            !loading && <Images/>
        );
    }
}