const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Here you would typically process the data (e.g., save to a database, send an email, etc.)

    console.log(`Received message from ${name} (${email}): ${message}`);
    res.json({ name, message: "Your message has been received!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
