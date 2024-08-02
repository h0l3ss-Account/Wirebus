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

    // SQL para criar a tabela
    $sql = "
        CREATE TABLE Sonda (
            ID INT IDENTITY(1,1) PRIMARY KEY,
            payload VARCHAR(255),
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    ";

    // Executa o comando SQL
    $conn->exec($sql);
    echo "Tabela 'Sonda' criada com sucesso!";
} catch (PDOException $e) {
    echo "Erro na criação da tabela: " . $e->getMessage();
}
?>
