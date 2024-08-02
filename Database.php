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
    $sql = "SELECT * FROM Sonda";
    $stmt = $conn->query($sql);

    // Recupera e exibe os resultados
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "ID: " . $row['ID'] . " | ";
        echo "Payload: " . $row['payload'] . " | ";
        echo "Timestamp: " . $row['timestamp']->format('Y-m-d H:i:s') . " | ";
        echo "Topic: " . $row['topic'] . "<br>";
    }
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>
