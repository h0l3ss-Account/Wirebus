<?php
$serverName = "tcp:wirebuss.database.windows.net,1433";
$database = "WirebussSQL";
$username = "wirebuss";
$password = "Eng12345";

try {
    // Cria uma conexão PDO com o driver sqlsrv
    $conn = new PDO("sqlsrv:server=$serverName;Database=$database", $username, $password);
    
    // Define o modo de erro para exceção
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Conexão bem-sucedida!<br>";

    // SQL para selecionar todos os valores da tabela Sonda
    $sqlSelect = "SELECT * FROM Sonda";
    $stmt = $conn->query($sqlSelect);

    // Verifica se há resultados
    if ($stmt->rowCount() > 0) {
        // Recupera e exibe os resultados
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "ID: " . $row['ID'] . " | ";
            echo "Payload: " . $row['payload'] . "<br>";
        }
    } else {
        echo "Nenhum dado encontrado na tabela 'Sonda'.";
    }
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>
