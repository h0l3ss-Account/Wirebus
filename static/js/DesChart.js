document.addEventListener('DOMContentLoaded', function () {
    function updateChartBasedOnTimeInterval() {
        const timeInterval = document.getElementById('timeInterval').value;
        fetchAndUpdateChart01(timeInterval);
    }

    function fetchAndUpdateChart01(timeInterval) {
        const url = `KPIFetchDataChart03des.php?interval=${timeInterval}`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta do servidor');
                }
                return response.json();
            })
            .then(data => {
                // Atualiza o gráfico de linha com os dados recebidos
                updateChart(data);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }

    function updateChart(data) {
        Highcharts.chart('grafico', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Histórico'
            },
            xAxis: {
                categories: data.map(item => formatarData(item.Timestamp)),
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Desempenho (%)',
                    style: {
                        fontWeight: 'bold'
                    }
                },
                max: 100, // Define o máximo da linha vertical
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            plotOptions: {
                series: {
                    animation: false // Remove a animação de atualização
                }
            },
            series: [{
                name: 'Desempenho',
                data: data.map(item => parseFloat(item.Desempenho))
            }]
        });
    }

    // Função para formatar a data
    function formatarData(timestamp) {
        const data = new Date(timestamp);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
        const horas = data.getHours().toString().padStart(2, '0');
        const minutos = data.getMinutes().toString().padStart(2, '0');
        return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
    }

    // Chama a função fetchAndUpdateChart01 apenas quando o modal é aberto
    function openModal() {
        var modal = document.getElementById("myModal");
        var loadingImage = document.getElementById("loadingImage");
        document.getElementById('closeModalBtn').addEventListener('click', closeModal);

        // Exibir o modal
        modal.style.display = "block";

        // Chamar a função para buscar e atualizar os dados do gráfico
        fetchAndUpdateChart01();
    }

    function closeModal() {
        var modal = document.getElementById("myModal");
        var loadingImage = document.getElementById("loadingImage");
        document.getElementById('closeModalBtn').addEventListener('click', closeModal);

        modal.style.display = "none";
    }

    // Chama a função fetchAndUpdateChart01 apenas quando o modal é aberto
    document.getElementById('openModalBtn').addEventListener('click', openModal);
    // Adiciona um ouvinte de eventos para o intervalo de tempo selecionado
    document.getElementById('timeInterval').addEventListener('change', updateChartBasedOnTimeInterval);
});
