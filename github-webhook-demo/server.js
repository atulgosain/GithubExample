const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Root path handler
app.get('/', (req, res) => {
    res.send('Webhook Server is Running!');
});

// Webhook endpoint for GitHub events
app.post('/webhook', (req, res) => {
    console.log('Received Webhook:', req.body);
    res.status(200).send('Webhook received successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});