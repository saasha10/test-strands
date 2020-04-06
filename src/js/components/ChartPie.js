import React, { Component } from "react"
import _ from 'lodash'
import Chart from 'chart.js'
import { COLORS } from '../constants/action-types'
//---------------------------------------------------------------------------
export default class ChartPie extends Component {
    //---------------------------------------------------------------------------
    componentDidMount() {
        console.log(this.props.dogsImages)
        this.createChart(this.props.dogsImages);
    }
    //---------------------------------------------------------------------------
    createChart = () => {
        let array_labels = [];
        let array_data = [];
        // Descending order and new array created with top 10 elements
        let top_10_images = _.orderBy(this.props.dogsImages, (e) => { return e.length }, ['desc']);
        top_10_images = top_10_images.slice(0, 10);
        // Get the keys and values to save in two array to pass to the Chart
        _.forEach(this.props.dogsImages, (values1, key1) => {
            _.forEach(top_10_images, (values2) => {
                if (values1.length === values2.length && array_labels.indexOf(key1) === -1) {
                    array_labels.push(key1);
                    array_data.push(values1.length);
                }
            });
        });
        // Create a Pie Chart
        var ctx = document.getElementById('myChart');
        ctx.getContext('2d')

        new Chart(ctx, {
            // The type of chart we want to create
            type: 'pie',
            // The data for our dataset
            data: {
                labels: array_labels,
                datasets: [{
                    label: 'Breeds',
                    fill: true,
                    backgroundColor: COLORS,
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
        console.log("RENDER CHART")
        return (
            <canvas id="myChart"></canvas>
        );
    }
}