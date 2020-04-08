import React, { Component } from "react"
import size from 'lodash/size'
import Chart from './ChartPie'
import { DATA_IMAGE_LOADED, URL_IMAGE, IMAGES } from '../constants/action-types'

export default class Images extends Component {

    componentDidMount() {
        const dogs = this.props.dogs
        
        Object.keys(dogs).forEach( key => {
            const urlImage = URL_IMAGE + key + IMAGES
            this.props.getData(urlImage, DATA_IMAGE_LOADED, key)
        })
    }

    render() {
        const dogs = this.props.dogs
        const dogsImages = this.props.dogsImages
        const chartIsReady = size(dogs) === size(dogsImages)

        return (
                chartIsReady && <Chart dogsImages={this.props.dogsImages}/>
        )
    }
}