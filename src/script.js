const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ message: 'hello from seans docker' });
});

app.get('/allItems', (req, res) => {
  res.json({items: ["apple","banana","orange"] });
});

app.listen(PORT, () => {
  console.log('listening on port' + PORT);
});
