const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Сървърът работи на адрес: http://localhost:3000');
});