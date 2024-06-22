async function fetchData(url, elementId, errorMessage) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na rede: ' + response.statusText);
        }
        const value = await response.text();
        
        // Atualiza o elemento apenas se ele existir
        const element = document.getElementById(elementId);
        if (element) {
            if (elementId === 'status-indicator-colisao' || elementId === 'status-indicator-trav-superior' || elementId === 'status-indicator-trav-inferior') {
                // Atualiza o estilo do background baseado no valor retornado
                if (value.trim() === '0') {
                    element.style.backgroundColor = 'red';
                } else if (value.trim() === '1') {
                    element.style.backgroundColor = 'green';
                } else {
                    element.style.backgroundColor = ''; // Limpa o estilo se não for 0 nem 1
                }
                
                // Atualiza o texto apenas uma vez, mantendo-o estático
                if (elementId === 'status-indicator-trav-superior') {
                    element.querySelector('.texto-status-indicator-trav-superior').textContent = 'Fim de Curso Travessa Superior';
                } else if (elementId === 'status-indicator-trav-inferior') {
                    element.querySelector('.texto-status-indicator-trav-inferior').textContent = 'Fim de Curso Travessa Inferior';
                } else {
                    element.querySelector('.texto-status-indicator-colisao').textContent = 'Fim de Curso de Colisão';
                }
            } else {
                // Para outros elementos, apenas atualiza o texto
                element.textContent = value;
            }
        }
    }  finally {
        // Chama a função novamente para continuar as requisições
        setTimeout(() => fetchData(url, elementId, errorMessage), 1000); // 1000 ms de atraso opcional
    }
}

// Função para buscar a força
function fetchForca() {
    fetchData('AtualizaForca.php', 'indicador-status-texto-forca', 'Erro ao buscar a força');
}

// Função para buscar a posição
function fetchPosicao() {
    fetchData('AtualizaPosicao.php', 'indicador-status-texto-posicao', 'Erro ao buscar a posição');
}

// Função para buscar o Fim de Curso de Colisão
function fetchFimDeCursoColisao() {
    fetchData('AtualizaFimdeCursoColisao.php', 'status-indicator-colisao', 'Erro ao buscar o Fim de Curso de Colisão');
}

// Função para buscar o Fim de Curso Travessa Superior
function fetchFimDeCursoSuperior() {
    fetchData('AtualizaFimdeCursoTravSuperior.php', 'status-indicator-trav-superior', 'Erro ao buscar o Fim de Curso Travessa Superior');
}

// Função para buscar o Fim de Curso Travessa Inferior
function fetchFimDeCursoInferior() {
    fetchData('AtualizaFimdeCursoTravInferior.php', 'status-indicator-trav-inferior', 'Erro ao buscar o Fim de Curso Travessa Inferior');
}

// Chama as funções ao carregar a página
window.onload = function() {
    fetchForca();
    fetchPosicao();
    fetchFimDeCursoColisao();
    fetchFimDeCursoSuperior();
    fetchFimDeCursoInferior();
};

// ZERAR POSICAO E FORCA

function handleButtonClick(url, successMessage, errorMessage) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(errorMessage);
            }
            return response.text(); // Lê a resposta como texto
        })
        .then(data => {
            // Exibe um alerta de sucesso
            alert(successMessage);
            console.log(data); // Opcional: Log da resposta do servidor
        })
        .catch(error => {
            console.error('Erro:', error);
            alert(errorMessage);
        });
}

document.getElementById('zerarPosicaoButton').addEventListener('click', function() {
    handleButtonClick('BotaoZeraPosicao.php', 'Posição zerada com sucesso', 'Erro ao zerar a posição');
});

document.getElementById('zerarForcaButton').addEventListener('click', function() {
    handleButtonClick('BotaoZeraForca.php', 'Força zerada com sucesso', 'Erro ao zerar a força');
});


/// CONTROLE SOBE TRAVESSA


document.getElementById('subirTravessaButton').addEventListener('mousedown', function() {
    // Enviar requisição para definir o valor para 1
    fetch('BotaoSobeTravessa.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'sobe=1'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar o valor para 1');
        }
        return response.text();
    })
    .then(data => {
        console.log('Botão pressionado, valor atualizado para 1');
        console.log(data); // Opcional: Log da resposta do servidor
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

document.getElementById('subirTravessaButton').addEventListener('mouseup', function() {
    // Enviar requisição para definir o valor para 0
    fetch('BotaoSobeTravessa.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'sobe=0'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar o valor para 0');
        }
        return response.text();
    })
    .then(data => {
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});


/// CONTROLE DESCE TRAVESSA

document.getElementById('descerTravessaButton').addEventListener('mousedown', function() {
    // Enviar requisição para definir o valor para 1
    fetch('BotaoDesceTravessa.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'sobe=1'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar o valor para 1');
        }
        return response.text();
    })
    .then(data => {
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

document.getElementById('descerTravessaButton').addEventListener('mouseup', function() {
    // Enviar requisição para definir o valor para 0
    fetch('BotaoDesceTravessa.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'sobe=0'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar o valor para 0');
        }
        return response.text();
    })
    .then(data => {

    })
    .catch(error => {
        console.error('Erro:', error);
    });
});


/// CONTROLE ALIVIO


document.getElementById('alivioButton').addEventListener('mousedown', function() {
    // Enviar requisição para definir o valor para 1
    fetch('BotaoAlivio.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'sobe=1'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar o valor para 1');
        }
        return response.text();
    })
    .then(data => {
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

document.getElementById('alivioButton').addEventListener('mouseup', function() {
    // Enviar requisição para definir o valor para 0
    fetch('BotaoAlivio.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'sobe=0'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar o valor para 0');
        }
        return response.text();
    })
    .then(data => {
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
