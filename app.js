const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
