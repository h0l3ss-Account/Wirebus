
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
                [0.7, '#DF5353'], // green
                [0.94, '#DDDF0D'], // yellow
                [0.98, '#55BF3B'] // red
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
    const chartSpeed = Highcharts.chart('container-des', Highcharts.merge(gaugeOptions, {
        chart: {
            type: 'solidgauge',
        },
        yAxis: {
            min: 0,
            max: 100,
            
            labels: {
                style: {
                    fontSize: '0.8vw' // Tamanho da fonte dos rótulos em relação à largura da tela
                }
            }
        },
    
        credits: {
            enabled: false
        },
    
        series: [{
            name: 'teste',
            data: [94.4],
            dataLabels: {
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:24px">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4">%</span>' +
                    '</div>'
            },
            tooltip: {
                valueSuffix: ' %'
            }
        }]
    
    }));
    
});
