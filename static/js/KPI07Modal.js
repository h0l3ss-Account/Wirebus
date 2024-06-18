function openModal07() {
    var modal = document.getElementById("myModal07");
    modal.style.display = "block";

    // Aqui você pode adicionar o código para buscar os dados e exibi-los no modal
    fetch('KPIFetchLabel07Data.php')
        .then(response => response.json())
        .then(data => {
            var tableBody = document.querySelector('#tagTable tbody');
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
function closeModal07() {
    var modal = document.getElementById("myModal07");
    modal.style.display = "none";
}

// Adiciona evento de clique ao botão para abrir o modal
document.getElementById("openModalBtn07").addEventListener("click", openModal07);
