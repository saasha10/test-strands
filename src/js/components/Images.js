import React, { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash';
import Chart from './ChartPie';
import { getData } from "../actions/index";
import { DATA_IMAGE_LOADED } from '../constants/action-types';
import { URL_IMAGE } from '../constants/action-types';
import { IMAGES } from '../constants/action-types';
//---------------------------------------------------------------------------
let count = 0;
//---------------------------------------------------------------------------
export class Images extends Component {
    //---------------------------------------------------------------------------
    componentDidMount() {
        let dogs = this.props.dogs;
        _.forEach(dogs, (value, key) => {
            count++;
            this.props.getData(URL_IMAGE + key + IMAGES, DATA_IMAGE_LOADED, key);
        });
        
    }
    //---------------------------------------------------------------------------
    render() {
        let chart_load = null;

        if(count === _.size(this.props.dogs_images) && _.size(this.props.dogs_images) !== 0){
            chart_load = <Chart/>
        }

        return (
            <div className="container">
                {chart_load}
            </div>
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
)(Images);