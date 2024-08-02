const express = require('express');
const { BlobServiceClient } = require('@azure/storage-blob');
const cors = require('cors');

const app = express();
const port = 3000;

// Configure sua conexão Azure Storage
const connectionString = 'DefaultEndpointsProtocol=https;AccountName=armazenamentostz661;AccountKey=YOUR_ACCOUNT_KEY;TableEndpoint=https://armazenamentostz661.table.core.windows.net/;';
const containerName = 'wirebus';

app.use(cors());
app.use(express.json());

app.get('/check-connection', async (req, res) => {
    try {
        const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const properties = await containerClient.getProperties();
        res.send('Conectado ao Azure Storage com sucesso!');
    } catch (error) {
        res.status(500).send('Falha na conexão com o Azure Storage: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});
