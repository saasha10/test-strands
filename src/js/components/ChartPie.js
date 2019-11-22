import React, { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash';
import Chart from 'chart.js';
import { RED } from '../constants/action-types';
import { PURPLE } from '../constants/action-types';
import { BLUE } from '../constants/action-types';
import { TEAL } from '../constants/action-types';
import { GREEN } from '../constants/action-types';
import { ORANGE } from '../constants/action-types';
import { YELLOW } from '../constants/action-types';
import { PINK } from '../constants/action-types';
import { BROWN } from '../constants/action-types';
import { GREY } from '../constants/action-types';
//---------------------------------------------------------------------------
export class ChartPie extends Component {
    //---------------------------------------------------------------------------
    componentDidMount() {
        this.createChart(this.props.dogs_images);
    }
    //---------------------------------------------------------------------------
    createChart = () => {
        let array_labels = [];
        let array_data = [];
        let array_colors = [RED, PURPLE, BLUE, GREEN, ORANGE, YELLOW, TEAL, PINK, BROWN, GREY];
        // Order descending and new array created with top 10 elements
        let top_10_images = _.orderBy(this.props.dogs_images, (e) => { return e.length }, ['desc']);
        top_10_images = top_10_images.slice(0, 10);
        // Get the keys and values to save in two array to pass to the Chart
        _.forEach(this.props.dogs_images, (values1, key1) => {
            _.forEach(top_10_images, (values2) => {
                if (values1.length === values2.length && array_labels.indexOf(key1) === -1) {
                    array_labels.push(key1);
                    array_data.push(values1.length);
                }
            });
        });
        // Create a Pie Chart
        var ctx = document.getElementById('myChart');
        if (ctx !== undefined && ctx !== null) {
            ctx.getContext('2d')
        }
        new Chart(ctx, {
            // The type of chart we want to create
            type: 'pie',
            // The data for our dataset
            data: {
                labels: array_labels,
                datasets: [{
                    label: 'Breeds',
                    fill: true,
                    backgroundColor: array_colors,
                    borderColor: '#bdbdbd',
                    data: array_data
                }]
            },
            // Configuration options go here
            options: {
                title: {
                    display: true,
                    text: 'Breeds',
                    position: 'top'
                },
                responsive: true,
                responsiveAnimationDuration: 1500,
            }
        });
    }
    //---------------------------------------------------------------------------
    render() {
        return (
            <canvas id="myChart"></canvas>
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
    null
)(ChartPie);