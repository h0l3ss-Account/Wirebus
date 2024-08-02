<?php
// Configurações de conexão
$serverName = "tcp:wirebuss.database.windows.net,1433";
$database = "WirebussSQL";
$username = "wirebuss";
$password = "Eng12345";

try {
    // Cria uma conexão PDO
    $conn = new PDO("sqlsrv:server=$serverName;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Inicializa variáveis para os valores
    $analogOutput1 = 0;
    $analogOutput2 = 0;
    $digitalInput1 = 'OFF';
    $ssr = 'OFF';

    // Consulta SQL para obter os valores baseados no tópico
    $topics = [
        'Analog Output 1' => 'analog_output_1',
        'Analog Output 2' => 'analog_output_2',
        'Digital Input 1' => 'digital_input_1',
        'SSR' => 'ssr'
    ];

    foreach ($topics as $topic => $var) {
        $sql = "SELECT TOP 1 payload FROM Sonda WHERE topic = :topic ORDER BY ID DESC";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':topic', $topic);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row) {
            ${$var} = $row['payload'];
        }
    }

    // Prepara o JSON de resposta
    $response = array(
        'analogOutput1' => $analogOutput1,
        'analogOutput2' => $analogOutput2,
        'digitalInput1' => $digitalInput1,
        'ssr' => $ssr
    );

    // Define o cabeçalho e envia a resposta JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} catch (PDOException $e) {
    // Em caso de erro, retorna um JSON com erro
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'Erro na conexão com o banco de dados: ' . $e->getMessage()));
}
?>
