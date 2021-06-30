const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/CV-Generator'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/CV-Generator/'}),
);
app.listen(process.env.PORT || 8080);
