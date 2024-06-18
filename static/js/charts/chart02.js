
document.addEventListener('DOMContentLoaded', function () {
    const gaugeOptions = {
        chart: {
            type: 'solidgauge',
            backgroundColor: 'transparent',
            spacing: [10, 10, 10, 10],
             // Adicione margens internas (top, right, bottom, left)

        },
    
        title: null,
    
        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
    
        exporting: {
            enabled: false
        },
    
        tooltip: {
            enabled: false
        },
    
        // the value axis
        yAxis: {
            stops: [
                [0.69, '#DF5353'], // green
                [0.7, '#55BF3B'], // yellow
                [0.75, '#DDDF0D'], // red
                [0.76, '#DF5353'] // red
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
    
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    
    // The speed gauge
    const chartSpeed = Highcharts.chart('container-vaz', Highcharts.merge(gaugeOptions, {
        chart: {
            type: 'solidgauge',
        },
        yAxis: {
            min: 0,
            max: 100,
           
        },
    
        credits: {
            enabled: false
        },
    
        series: [{
            name: 'teste',
            data: [70.86],
            dataLabels: {
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:24px">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4">m³/h</span>' +
                    '</div>'
            },
            tooltip: {
                valueSuffix: 'm³/h'
            }
        }]
    
    }));
    
});
