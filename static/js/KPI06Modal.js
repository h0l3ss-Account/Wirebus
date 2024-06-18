function openModal06() {
    var modal = document.getElementById("myModal06");
    modal.style.display = "block";

    // Aqui você pode adicionar o código para buscar os dados e exibi-los no modal
    fetch('KPIFetchLabel06Data.php')
        .then(response => response.json())
        .then(data => {
            console.log('Dados recebidos:', data); // Verifica se os dados foram recebidos corretamente

            var tableBody = document.querySelector('#tagTable06 tbody');
            if (!tableBody) {
                console.error('Erro: Elemento tbody não encontrado.');
                return;
            }

            // Limpa o conteúdo anterior
            tableBody.innerHTML = '';

            // Verifica se há dados retornados
            if (data && data.tagsData && Object.keys(data.tagsData).length > 0) {
                // Adiciona os dados das tags à tabela
                Object.values(data.tagsData).forEach(tag => {
                    if (tag.Nome.endsWith('_PV')) {
                        var spTag = tag.Nome.replace('_PV', '_SP');
                        var spValue = data.tagsData[spTag];
                        var spValueText = spValue ? parseFloat(spValue.Valor).toFixed(2) : '';
                        var spTagLabel = spValue ? spTag : ''; // Se não houver valor, não exiba a tag SP correspondente
                        var correspondingTag = spTag.replace('TT_', 'TC_'); // Encontrar a tag SP correspondente à tag PV
                        var correspondingValue = data.tagsData[correspondingTag];
                        var correspondingValueText = correspondingValue ? parseFloat(correspondingValue.Valor).toFixed(2) : '';
                        var row = "<tr>" +
                            "<td>" + tag.Nome + "</td>" +
                            "<td>" + parseFloat(tag.Valor).toFixed(2) + "</td>" +
                            "<td>" + correspondingTag + "</td>" +
                            "<td>" + correspondingValueText + "</td>" +
                            "<td>" + tag.Timestamp + "</td>" +
                            "</tr>";
                        tableBody.innerHTML += row;
                    }
                });

                // Fecha o modal após a atualização da tabela
                closeModal06();
            } else {
                console.error('Erro: Dados inválidos retornados pela requisição.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

// Função para fechar o modal quando o usuário clica no botão de fechar
function closeModal06() {
    var modal = document.getElementById("myModal06");
    modal.style.display = "none";
}

// Função para fechar o modal quando o usuário clica fora dele
window.onclick = function (event) {
    var modal = document.getElementById("myModal06");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Adiciona evento de clique ao botão para abrir o modal após o DOM ser carregado
document.addEventListener("DOMContentLoaded", function () {
    var openModalBtn06 = document.getElementById("openModalBtn06");
    if (openModalBtn06) {
        openModalBtn06.addEventListener("click", openModal06);
    } else {
        console.error('Erro: Elemento openModalBtn06 não encontrado.');
    }
});
