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

    // SQL para excluir a tabela se ela existir
    $sqlDrop = "IF OBJECT_ID('Sonda', 'U') IS NOT NULL DROP TABLE Sonda;";
    $conn->exec($sqlDrop);

    // SQL para criar a nova tabela
    $sqlCreate = "
        CREATE TABLE Sonda (
            ID INT IDENTITY(1,1) PRIMARY KEY,
            payload VARCHAR(255),
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            topic VARCHAR(255)  -- Campo adicional
        );
    ";

    // Executa o comando SQL para criar a tabela
    $conn->exec($sqlCreate);
    echo "Tabela 'Sonda' criada com sucesso1111!";
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>
