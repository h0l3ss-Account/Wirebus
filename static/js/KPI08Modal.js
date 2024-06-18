function openModal08() {
    var modal = document.getElementById("myModal08");
    modal.style.display = "block";

    // Aqui você pode adicionar o código para buscar os dados e exibi-los no modal
    fetch('KPIFetchLabel08Data.php')
        .then(response => response.json())
        .then(data => {
            var tableBody = document.querySelector('#tagTable08 tbody');
            tableBody.innerHTML = ''; // Limpa o conteúdo anterior

            // Adiciona os dados das tags à tabela
            data.tagsData.forEach(tag => {
                var row = "<tr>" +
                            "<td>" + tag.nomeTag + "</td>" +
                            "<td>" + parseFloat(tag.valorMCA).toFixed(2) + "</td>" +
                            "<td>" + parseFloat(tag.porcentagemIndividual).toFixed(2) + "</td>" +
                          "</tr>";
                tableBody.innerHTML += row;
            });

        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

// Função para fechar o modal
function closeModal08() {
    var modal = document.getElementById("myModal08");
    modal.style.display = "none";
}

// Adiciona evento de clique ao botão para abrir o modal
document.getElementById("openModalBtn08").addEventListener("click", openModal08);
