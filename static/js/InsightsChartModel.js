document.addEventListener('DOMContentLoaded', function () {
    function criarGrafico(intervaloTempo, containerId, titulo) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'insightsChartSample01.php?tempo=' + intervaloTempo, true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                var dados = JSON.parse(xhr.responseText);
                var series = [];
                var linhaEstilo = {
                    solid: {
                        dashStyle: 'Solid',
                        color: '#93C2E4',
                        width: 1 // Altera a largura da linha
                    },
                    dash: {
                        dashStyle: 'Dash',
                        color: '#E22028',
                        width: 1 // Altera a largura da linha
                    }
                };

                // Adiciona as séries ALM_H, ALM_L e Valor
                ['ALM_H', 'ALM_L', 'Valor'].forEach(function (key) {
                    // Verifica se é ALM_H ou ALM_L para definir o estilo de linha
                    var linhaStyle = (key === 'ALM_H' || key === 'ALM_L') ? linhaEstilo.dash : linhaEstilo.solid;
                    series.push({
                        name: key,
                        data: dados[key],
                        color: linhaStyle.color,
                        dashStyle: linhaStyle.dashStyle,
                        lineWidth: linhaStyle.width, // Define a largura da linha
                        marker: {
                            enabled: false // Remove os pontos
                        },
                        animation: false // Desativa a animação da série
                    });
                });

                var options = {
                    chart: {
                        type: 'line',
                        renderTo: containerId,
                        backgroundColor: '#e7e7e7' // Define a cor de fundo do gráfico
                    },
                    title: {
                        text: titulo,
                        style: {
                            fontFamily: 'Arial, sans-serif',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '2px',
                            lineHeight: '1',
                            color: 'grey',
                            fontSize: '14px' // Tamanho da fonte do título
                        }
                    },
                    xAxis: {
                        type: 'datetime',
                        title: {
                            text: 'Tempo', // Altere o texto do eixo horizontal aqui
                            style: {
                                color: 'grey',
                                fontSize: '0px'
                            }
                        },
                        labels: {
                            formatter: function () {
                                return Highcharts.dateFormat('%H:%M:%S', this.value);
                            },
                            style: {
                                color: 'grey', // Altere a cor do valor da legenda
                                fontSize: '10px' // Altere o tamanho do valor da legenda
                            }
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Valor', // Altere o texto do eixo vertical aqui
                            style: {
                                color: 'grey',
                                fontSize: '0px'
                            }
                        }
                    },
                    legend: {
                        itemStyle: {
                            fontFamily: 'Arial, sans-serif',
                            color: 'grey',
                            fontSize: '10px' // Tamanho da fonte das legendas
                        }
                    },
                    series: series
                };

                Highcharts.chart(containerId, options);
            } else {
                console.error('Erro ao obter os dados: ' + xhr.status);
            }
        };
        xhr.onerror = function () {
            console.error('Erro ao obter os dados.');
        };
        xhr.send();
    }

    // Criar os gráficos para os diferentes intervalos de tempo
    criarGrafico('24h', 'graficoContainer-24h', 'Insights 24 Horas');
    criarGrafico('8h', 'graficoContainer-8h', 'Insights 8 Horas');
    criarGrafico('1h', 'graficoContainer-1h', 'Insights 1 Hora');

    // Atualizar os gráficos a cada 1 minuto
    setInterval(function() {
        criarGrafico('24h', 'graficoContainer-24h', '24 Horas');
        criarGrafico('8h', 'graficoContainer-8h', '8 Horas');
        criarGrafico('1h', 'graficoContainer-1h', '1 Hora');
    }, 5000); // 60000 milissegundos = 1 minuto
});
