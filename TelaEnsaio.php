<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ferrusi</title>
    <link rel="stylesheet" href="main/css/TelaEnsaio.css">
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="main/js/GraficoEnsaio.js"></script>

</head>
<body>
    <header>
        <img src="main/img/Logo.png" alt="Ferrusi Logo" class="logo">
    </header>
    <div class="container top-container">
        <div class="left">
                    <div class="indicador-status-texto-posicao">Posição:</div>
                    <div class="indicador-status-valor-posicao"> 0.256</div>
                    <div class="indicador-status-valor-sufixo"> mm</div>
        </div>
        <div class="center">
         
        </div>
        <div class="right">
            <div class="indicador-status-posicao">
                   
            </div>
            <div class="indicador-status-forca">
                    <div class="indicador-status-texto-forca">Força:</div>
                    <div class="indicador-status-valor-forca"> 0</div>
                    <div class="indicador-status-valor-sufixo-forca"> N</div>
            </div>
        </div>
    </div>
    <div class="container bottom-container">
        <div class="full-width" id="grafico-container"></div>
    </div>
    <footer>
        Copyright © SENAI 2024
    </footer>
</body>
</html>
