import React, { Component } from "react"
import _ from 'lodash'
import Chart from './ChartPie'
import { DATA_IMAGE_LOADED, URL_IMAGE, IMAGES } from '../constants/action-types'
//---------------------------------------------------------------------------
let count = 0;
//---------------------------------------------------------------------------
export default class Images extends Component {
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

        if(count === _.size(this.props.dogsImages) && _.size(this.props.dogsImages) !== 0){
            chart_load = <Chart dogsImages={this.props.dogsImages}/>
        }

        return (
            <div className="container">
                {chart_load}
            </div>
        );
    }
}