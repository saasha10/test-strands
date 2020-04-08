import orderBy from 'lodash/orderBy'
import forEach from 'lodash/forEach'
import Chart from 'chart.js'
import { COLORS } from '../constants/action-types'

function createChart ({dogsImages}) {
    let labelsChart = []
    let dataChart = []
    // Descending order and new array created with top 10 elements
    let top10images = orderBy(dogsImages, (e) => { return e.length }, ['desc'])
    top10images = top10images.slice(0, 10)
    // Get the keys and values to save in two array to pass to the Chart
    forEach(dogsImages, (images, dog) => {
        forEach(top10images, imagesTop10 => {
            if (images.length === imagesTop10.length && labelsChart.indexOf(dog) === -1) {
                labelsChart.push(dog);
                dataChart.push(images.length)
            }
        });
    });
    // Create a Pie Chart
    var ctx = document.getElementById('myChart')
    if(ctx !== null)
        ctx.getContext('2d')

    new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
        // The data for our dataset
        data: {
            labels: labelsChart,
            datasets: [{
                label: 'Breeds',
                fill: true,
                backgroundColor: COLORS,
                borderColor: '#bdbdbd',
                data: dataChart
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

export default function ({dogsImages}) {
    createChart({dogsImages})
    return (
        null
    )
}