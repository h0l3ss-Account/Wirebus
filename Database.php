<?php
// Conexão usando PDO
try {
    // Cria uma conexão PDO
    $connPDO = new PDO("sqlsrv:server=tcp:wirebuss.database.windows.net,1433;Database=WirebussSQL", "wirebuss", "Eng12345");
    $connPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão PDO bem-sucedida!<br>";
    
    // Consulta para selecionar todos os valores da tabela Sonda
    $sqlSelect = "SELECT * FROM Sonda";
    $stmtPDO = $connPDO->query($sqlSelect);

    // Verifica se há resultados
    if ($stmtPDO->rowCount() > 0) {
        // Recupera e exibe os resultados
        while ($row = $stmtPDO->fetch(PDO::FETCH_ASSOC)) {
            echo "ID: " . $row['ID'] . " | ";
            echo "Payload: " . $row['payload'] . "<br>";
        }
    } else {
        echo "Nenhum dado encontrado na tabela 'Sonda' com PDO.<br>";
    }
} catch (PDOException $e) {
    echo "Erro na conexão PDO: " . $e->getMessage() . "<br>";
}

// Conexão usando sqlsrv
$connectionInfo = array(
    "UID" => "wirebuss",
    "pwd" => "Eng12345",
    "Database" => "WirebussSQL",
    "LoginTimeout" => 30,
    "Encrypt" => 1,
    "TrustServerCertificate" => 0
);
$serverName = "tcp:wirebuss.database.windows.net,1433";
$connSqlsrv = sqlsrv_connect($serverName, $connectionInfo);

if ($connSqlsrv === false) {
    die(print_r(sqlsrv_errors(), true));
}
echo "Conexão sqlsrv bem-sucedida!<br>";

// Consulta para selecionar todos os valores da tabela Sonda usando sqlsrv
$sqlSelectSqlsrv = "SELECT * FROM Sonda";
$stmtSqlsrv = sqlsrv_query($connSqlsrv, $sqlSelectSqlsrv);

if ($stmtSqlsrv === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Verifica se há resultados
if (sqlsrv_has_rows($stmtSqlsrv)) {
    // Recupera e exibe os resultados
    while ($row = sqlsrv_fetch_array($stmtSqlsrv, SQLSRV_FETCH_ASSOC)) {
        echo "ID: " . $row['ID'] . " | ";
        echo "Payload: " . $row['payload'] . "<br>";
    }
} else {
    echo "Nenhum dado encontrado na tabela 'Sonda' com sqlsrv.<br>";
}

// Fecha a conexão
sqlsrv_close($connSqlsrv);
?>
