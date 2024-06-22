document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('grafico-container', {
        chart: {
            type: 'line',
            borderWidth: 1, // Adiciona a borda
            borderColor: '#000000' // Define a cor da borda (preto)
        },
        title: {
            text: null // Sem título, como no gráfico original
        },
        xAxis: {
            title: {
                text: 'Concentração (??)'
            },
            categories: [150, 160, 170, 180, 190, 200, 210, 220] // Exemplo de categorias do eixo X
        },
        yAxis: {
            title: {
                text: 'Concentração'
            },
            max: 100, // Configurando o eixo Y para ter um máximo de 100
            min: 0  // Configurando o eixo Y para ter um mínimo de 0
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top'
        },
        series: [{
            name: 'Concentração',
            data: [1, 2, 3, 4, 5, 6, 7, 0], // Exemplo de dados constantes
            marker: {
                enabled: false // Remove os pontos da linha
            },
            color: '#31488c' // Define a cor da linha
        }]
    });
});
