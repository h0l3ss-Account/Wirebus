
<?php

function getConnection() {
    $serverName = "tcp:synapseanalytics661.sql.azuresynapse.net,1433";
    $connectionOptions = array(
        "UID" => "sqladminuser",
        "PWD" => "Eng12345",
        "Database" => "SupervisaoAssistida",
        "LoginTimeout" => 30,
        "Encrypt" => 1,
        "TrustServerCertificate" => 0
    );

    $conn = sqlsrv_connect($serverName, $connectionOptions);

    if (!$conn) {
        die("Erro na conexão: " . print_r(sqlsrv_errors(), true));
    }

    return $conn;
}
?>
