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
            <button class="button-formularios" style="margin-top: 30px;">Finalizar Ensaio</button>
            <button class="button-formularios">Alivio</button>
            <button class="button-formularios">Retomar Ensaio</button>
            <button class="button-formularios-emergencia">Emergência</button>
        </div>
        <div class="center">
            <button class="button-formularios" style="margin-top: 30px;">Zerar Força</button><br>
            <button class="button-formularios">Zerar Gráfico</button><br>
            <button class="button-formularios">Zerar Posição</button>
        </div>
        <div class="right">
            <div class="indicador-status-posicao">
                    <div class="indicador-status-texto-posicao">Posição:</div>
                    <div class="indicador-status-valor-posicao"> 0.256</div>
                    <div class="indicador-status-valor-sufixo"> mm</div>
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
