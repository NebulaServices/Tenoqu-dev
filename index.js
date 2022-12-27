const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.get/('/', (req, res) => res.render('/public/appindex'));
app.listen(port, () => console.log(`Tenoqu listening on port ${port}!`));