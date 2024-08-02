<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WIREBUS</title>
    <link rel="stylesheet" href="main/css/TelaEnsaio.css">
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="main/js/GraficoEnsaio.js"></script>
    <script>
        function updateValues() {
            // Faz uma requisição para o script PHP
            fetch('get_values.php')
                .then(response => response.json())
                .then(data => {
                    // Atualiza os valores na página
                    document.getElementById('analog-output-1').textContent = data.analogOutput1 || 0;
                    document.getElementById('analog-output-2').textContent = data.analogOutput2 || 0;
                    document.getElementById('digital-input-1').textContent = data.digitalInput1 || 'OFF';
                    document.getElementById('ssr').textContent = data.ssr || 'OFF';
                })
                .catch(error => console.error('Erro ao buscar os valores:', error));
        }

        // Atualiza os valores a cada 1 segundo
        setInterval(updateValues, 1000);

        // Atualiza os valores ao carregar a página
        window.onload = updateValues;
    </script>
</head>
<body>
    <header>
        <img src="main/img/SENAI_São_Paulo_logo.png" alt="Logo" class="logo">
        <img src="main/img/Logo.png" alt="Logo" class="logo">
    </header>

    <div class="container botton-container">
        <div class="left01">
            Monitoramento em Nuvem - Spectra WMT-306
        </div>
    </div>
    <div class="container top-container">
        <div class="left">
            <img src="main/img/Equipamento.png">
        </div>
        <div class="center01">
            <div class="full-width" id="grafico-container"></div>
        </div>
    </div>
    <div class="container botton-container">
        <div class="left01">
            <div class="indicador-status-posicao">
                <div class="indicador-status-texto-posicao">Analog Output 1:</div>
                <div class="indicador-status-valor-posicao" id="analog-output-1">0</div>
            </div>
            <div class="indicador-status-posicao">
                <div class="indicador-status-texto-posicao">Analog Output 2:</div>
                <div class="indicador-status-valor-posicao" id="analog-output-2">0</div>
            </div>
            <div class="indicador-status-posicao">
                <div class="indicador-status-texto-posicao">Digital Input 1:</div>
                <div class="indicador-status-valor-posicao" id="digital-input-1">OFF</div>
            </div>
            <div class="indicador-status-posicao">
                <div class="indicador-status-texto-posicao">SSR:</div>
                <div class="indicador-status-valor-posicao" id="ssr">OFF</div>
            </div>
        </div>
    </div>
    <footer>
        Copyright © SENAI 2024
    </footer>
</body>
</html>
