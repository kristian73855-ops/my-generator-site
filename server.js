const express = require('express');
const path = require('path');
const app = express();

// Казваме на сървъра къде са файловете
app.use(express.static(path.join(__dirname, 'public')));

// Казваме му да зарежда index.html при отваряне
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});