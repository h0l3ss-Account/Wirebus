<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WIREBUS</title>
    <link rel="stylesheet" href="main/css/TelaEnsaio.css">
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="main/js/GraficoEnsaio.js"></script>
</head>
<body>
    <header>
        <img src="main/img/SENAI_São_Paulo_logo.png" alt="Logo" class="logo">
        <img src="main/img/Logo.png" alt="Logo" class="logo">
    </header>
    <div class="container centered-text-container">
        Monitoramento em Núvem - WMT-306
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
                <div class="indicador-status-valor-posicao">0</div>
                <br>
                <div class="indicador-status-valor-sufixo">0 ~ 20 mA</div>
            </div>
            <div class="indicador-status-posicao">
                <div class="indicador-status-texto-posicao">Analog Output 2:</div>
                <div class="indicador-status-valor-posicao">0</div>
                <br>
                <div class="indicador-status-valor-sufixo">0 ~ 20 mA</div>
            </div>
            <div class="indicador-status-posicao">
                <div class="indicador-status-texto-posicao">Digital Input 1:</div>
                <div class="indicador-status-valor-posicao">0</div>
                <br>
                <div class="indicador-status-valor-sufixo">DI</div>
            </div>
            <div class="indicador-status-posicao">
                <div class="indicador-status-texto-posicao">SSR:</div>
                <div class="indicador-status-valor-posicao">0</div>
                <br>
                <div class="indicador-status-valor-sufixo">On/Off</div>
            </div>
        </div>
    </div>
    <footer>
        Copyright © SENAI 2024
    </footer>
</body>
</html>
