document.addEventListener('DOMContentLoaded', function () {

    var ValorPorcentagem = (4.7 / 6) * 100;

    // Transforme o valor para uma porcentagem de 0 a 100
    ValorPorcentagem = Math.min(100, Math.max(0, ValorPorcentagem));

    const gaugeOptions = {
        chart: {
            type: 'solidgauge',
            backgroundColor: 'transparent',
            spacing: [10, 10, 10, 10],
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
    
        yAxis: {
            stops: [
                [0, '#DF5353'],
                [0.9, '#DDDF0D'],
                [0.91, '#55BF3B']
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
                    useHTML: true,
                    format: '<div style="text-align:center">' +
                            '<span style="font-size:30px">{y:.2f}</span><br/>' +
                            '<span style="font-size:12px;opacity:0.4">%</span>' +
                            '</div>'
                }
            }
        }
    };
    
    // The speed gauge
    const chartSpeed = Highcharts.chart('container-efic', Highcharts.merge(gaugeOptions, {
        chart: {
            type: 'solidgauge',
        },
        yAxis: {
            min: 0,
            max: 100,
           
            labels: {
                style: {
                    fontSize: '0.8vw'
                }
            }
        },
    
        credits: {
            enabled: false
        },
    
        series: [{
            name: 'teste',
            data: [ValorPorcentagem],
            dataLabels: {
                format: '<div style="text-align:center">' +
                        '<span style="font-size:24px">{y:.2f}</span><br/>' +
                        '<span style="font-size:12px;opacity:0.4">%</span>' +
                        '</div>'
            },
            tooltip: {
                valueSuffix: '%'
            }
        }]
    }));
 
});
